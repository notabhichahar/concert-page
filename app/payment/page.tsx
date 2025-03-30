"use client"
import style from '@/styles/payment.module.css'
import { useState } from "react"
import Image from "next/image";
import Processing from "@/assets/dribbble-progress-bar.gif";
import Sucessful from "@/assets/Complete_Symbol-256.webp"
 import { useRouter, useSearchParams } from 'next/navigation';

export default function Payment(){
    const searchParams = useSearchParams()
    const ticketId = searchParams.get('ticketId')
    const router = useRouter()
    function goToTicket(){
        router.push(`/ticket?ticketId=${ticketId}`);
    }
    const [processing, setProcessing] = useState(true);
    setTimeout(setProcessing,3000)
    setTimeout(goToTicket, 4000)


    return(
        <div className={style.container}>
        {processing ? 
        
           <div> <Image src={Processing} alt="Processing" height={400} width={400}/> <h1 className={style.h1}>Payment Processing </h1></div>
         : 
         <div> <Image src={Sucessful} alt="Processing" height={250} width={250}/> <h1 className={style.h1}>Payment Successful </h1></div>
        }

        </div>
    )
}