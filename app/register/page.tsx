"use client"
import style from '@/styles/RegisterPage.module.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 

import { useState } from 'react';

import { useRouter } from 'next/navigation'
export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [type, setType] = useState("");


    const firebaseConfig = {
        apiKey: "AIzaSyDG6cQAw001zGI0P4n3eUuTZxrMdxBxAVE",
        authDomain: "concert-app-01.firebaseapp.com",
        projectId: "concert-app-01",
        storageBucket: "concert-app-01.firebasestorage.app",
        messagingSenderId: "543757877045",
        appId: "1:543757877045:web:7e27bc5bb46b5a8ac9167c"
      };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    async function handleSubmitBtn() {
        const docRef = await addDoc(collection(db, "attendees"), {
            firstname: firstName,
            lastname: lastName,
            mobilenumber: number,
            type: type
          });
        console.log("Document written with ID: ", docRef.id);
        router.push(`/payment?ticketId=${docRef.id}`)
    }

    const router =useRouter()
    return(
        <div className={style.container}> 
        <div className={style.Reg}>Register Page</div>
       <div className ={style.text}> <h1 >First Name</h1>
        <input className ={style.input}  type="text" onChange={(e) => setFirstName(e.target.value)} /></div>
        <div className ={style.text} > <h1 >Last Name</h1>
        <input className ={style.input} type="text"   onChange={(e) => setLastName(e.target.value)}/></div>
        <div className ={style.text}> <h1 >Mobile Number</h1>
        <input className ={style.input}  type="text"  onChange={(e) => setNumber(e.target.value)}/></div>

        <div className ={style.text}><select name="" id=""  onChange={(e) => setType(e.target.value)}>
        <option value="">Ticket</option>
            <option value="silver">Silver      $5 </option>
            <option value="gold">Gold         $7</option>
            <option value="platinum">Platinium    $10</option>
            </select></div>
        <div className={style.button} onClick={handleSubmitBtn}> Submit</div>
        </div>
    )
}