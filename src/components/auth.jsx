import { useState } from 'react';
import { auth,googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from 'firebase/auth';

export const Auth = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    console.log("User signed in",email,password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);  
      
    } catch (e) {
      console.error(e);
    } 
  }
  const signInWithGoogle = async () => {
      console.log("User signed in with google",email,password);
    try {
      await signInWithPopup(auth, googleProvider);  
      
    } catch (e) {
      console.error(e);
    }
  }
  const logout = async () => {
      console.log("User logged out",email,password);
    try {
      await signOut(auth);  
      
    } catch (e) {
      console.error(e);
    }
  }
  console.log(auth?.currentUser?.email);
  return (
    <div>
      <input type="email" placeholder="Email..." onChange={(e)=>{setEmail(e.target.value)}}/> 
      <input type='password' placeholder="Password..."  onChange={(e)=>{setPassword(e.target.value)}}/> 
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>SignInWithGoogle</button>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}