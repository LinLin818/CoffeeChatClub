"use client"; //This is a client page
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";
import Navbar from './footer/Navbar';




// Export content to the front end 
const HaveLoggedIn = () => {
  // Status use to check if the user is logged in and if the page is loaded//
  const {isSignedIn, isLoaded } = useUser();
  //Page changer
  const router = useRouter();

  useEffect(() => {
    if(isLoaded && isSignedIn) {
      router.push('/dashboard'); //If the user is signed in and the page is loaded redirect the user to the dashboard
    }
  }, [isLoaded, isSignedIn, router]);

if(!isLoaded){
  return<div>Loading.....</div> // show loading stat while checking for auth
}
   return <Navbar/>;
};
export default HaveLoggedIn

