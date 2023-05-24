const { User } = require("../models");
const { AuthenticationError } = require("apollo-server");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    currUser: async (_, args, context) => {
      if (context) {
        const userData = await User.findOne({ _id: context._id })
          .select("-_v -password")
          .populate("books");
        return userData;
      } else {
        throw new AuthenticationError("please log in");
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError(
          "email or password incorrect, please try again. "
        );
      }
      const pw = await user.isCorrectPassword(password);
      if (!pw) {
        throw new AuthenticationError(
          "email or password incorrect, please try again. "
        );
      }
      const token = signToken(user);
      return { user, token };
    },

    saveBook: async (_, args, context) => {
      if (!context._id) {
        throw new AuthenticationError("err");
      }

      const addBookToUser = await User.findByIdAndUpdate(
        { _id: context._id },
        { $addToSet: { savedBooks: args.input } },
        { new: true }
      );
      return addBookToUser;
    },

    delBook: async (_,  args , context) => {
      if (!context) {
        throw new AuthenticationError("Please log in first!");
      }
      const removeBookFromUser = await User.findByIdAndUpdate(
        { _id: context._id },
        { $pull: { savedBooks: { bookId: args.bookId } } }
      );
      return removeBookFromUser;
    },
  },
};

module.exports = resolvers;
