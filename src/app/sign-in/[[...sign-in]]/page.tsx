import { SignIn } from "@clerk/nextjs";
import React from 'react'

export default function login(){
return(
    <>
    <div>page
    </div>

    <div>
        {/* Built in Sigin function taken from Clerk */}
        <SignIn/>
    </div>;
    </>
    
);
}