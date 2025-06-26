"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
export default function Home() {

   const { 
        data: session, //refetch the session
    } = authClient.useSession() 
 
 const [email,setemail]=useState("");  
  const [name,setname]=useState("");  
  const [password,setpassword]=useState("");  
  const onSubmit=()=>{
    authClient.signUp.email({
      email,
      password,
      name,

    },{
      onError:()=>{
        window.alert("Something is Wrong");
      },
      onSuccess:()=>{
        window.alert("Sucess")
      }
    });
  }

  if(session){
    return (<div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button onClick={()=>authClient.signOut()}>Sign Out</Button>
    </div>)
  }

  return(
    <div className="p-4 flex flex-col gap-y-4">
      <Input type="text" placeholder="name"
       value={name}  
      onChange={(e)=>setname(e.target.value)}/>
      <Input type="text" placeholder="email"
       value={email}  
      onChange={(e)=>setemail(e.target.value)}/>
      <Input type="password" placeholder="password"
       value={password}  
      onChange={(e)=>setpassword(e.target.value)} />
      <Button onClick={onSubmit}>
        create user
      </Button>
    </div>
  )
}
