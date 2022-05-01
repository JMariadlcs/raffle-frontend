import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header" // to use the code in Header
import LotteryEntrance from "../components/LotteryEntrance" // to use the code in LotteryEntrance
import { useMoralis } from "react-moralis"; // use functions from Moralis

export default function Home() {
  const { isWeb3Enabled } = useMoralis()

  return (
    <div className={styles.container}>
       <Header />
      {isWeb3Enabled ? (
      <>
       
        <LotteryEntrance />
      </>
       ) : (
             <div> No MetaMask detected...</div>
    )}
    </div>
  )
}
