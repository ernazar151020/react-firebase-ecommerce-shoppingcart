import React, { useState, useEffect } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/Header";
import SignInUp from "./pages/sign-in-sign-up/SignIn-SignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
const HatsPage = (props) => {
  return <h1>Hats Page</h1>;
};

function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // setCurrentUser(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          console.log(snapshot.data());
          setCurrentUser({
            ...currentUser,
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);
  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInUp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
