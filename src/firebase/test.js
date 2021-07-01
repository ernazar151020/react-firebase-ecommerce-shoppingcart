import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("x9Ptr9D2BmHH9P7EhqQX")
  .collection("cartItems")
  .doc("GuOYgTmQPetdoMdZaSEk");
