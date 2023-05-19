const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    currUser: async (_, args, context) => { 
      if ( context.user ) { 
      const userData = await User.findOne({ _id: context.user._id }).select(
        "-_v -password"
      );
      return userData;
      } else {
        throw new AuthenticationError('please log in')
      }
    },
  },

  Mutation: {
    createUser: async (_, args ) => { 
      const user = await User.create(args)
      const token = signToken(user)
      return { user, token};
    },
    logIn: async (_, {email, password}) => {
      const user = await User.findOne({email})
      if (!user) {
        throw new AuthenticationError('email or password incorrect, please try again. ')
      }
      const pw = await user.isCorrectPassword(password)
      if (!pw) {
        throw new AuthenticationError('email or password incorrect, please try again. ')
      }
      const token = signToken(user)
      return { user, token }
    }
  },
};

module.exports = resolvers;
