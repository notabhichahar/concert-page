"use client";

import Image from 'next/image';
import LogoIcon from '@/assets/icon.png';

import styles from '@/styles/HomePage.module.css';

import { useRouter } from 'next/navigation';

export default function Home(){

  const router = useRouter();

  return(
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <span className={styles.headingText}>Listen to</span>
        <Image src={LogoIcon} height={300} width={300} alt='Seedhe Maut'/>
        <span className={styles.headingText}>
          <span style={{color:'red'}}>LIVE</span> on 26 January 2026!
        </span>
        <div className={styles.button} onClick={() => router.push('/register')}>Register Now!</div>
      </div>
    </div>
  )
}