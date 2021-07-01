import React, { useState, useEffect } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/Header";
import SignInUp from "./pages/sign-in-sign-up/SignIn-SignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUsers } from "./redux/user/actions";
const HatsPage = (props) => {
  return <h1>Hats Page</h1>;
};

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // setCurrentUser(user);
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUsers(() =>
            dispatch({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        setCurrentUsers(() => dispatch(userAuth));
      }

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);
  return (
    <Router>
      <Header />
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
