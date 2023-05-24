import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";




const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("id_token")
      ? `Bearer ${localStorage.getItem("id_token")}`
      : null,
  },
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/saved" element={<SavedBooks />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
