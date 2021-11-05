import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import router from "next/router";
import UserModel from "../models/userModel";
import { PrimaryButton } from "./lolo-ui/buttons";

export default function LoginForm() {
  function signIn() {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider,)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const userObj = new UserModel(
          user.displayName,
          user.email,
          user.emailVerified,
          user.photoURL,
          user.uid
          );
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(userObj));
        userObj.uid != "".trim() && router.push('/home');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="rounded w-full p-5 flex flex-col items-center">
      <h1>Log-In</h1>
      <PrimaryButton onClick={()=>signIn()} value='Sign-In with google'/>
    </div>
  );
}
