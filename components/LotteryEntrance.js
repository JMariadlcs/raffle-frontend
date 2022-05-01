// This file will contain all the code related to our Raffle (ON RINKEBY)

import { useEffect, useState } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi } from "../constants/abi" // import Raffle.json ABI

const RAFFLE_CONTRACT_ADDRESS = "0xeB57511B172f66880Ee7F17f6504A9Ba52039B4B";

export default function LotteryEntrance() {

    const{ isWeb3Enabled } = useMoralis()
    const [recentWinner, setRecentWinner] = useState("0")

    // Create Button to entry into the lottery
    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: RAFFLE_CONTRACT_ADDRESS, // Raffle.sol Smart Contract deployed on rinkeby
        functionName: "enterRaffle",
        msgValue: "100000000000000000",
        params: {},
    })

    // GET RECENT WINNER FUNCTION
    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: RAFFLE_CONTRACT_ADDRESS, // Raffle.sol Smart Contract deployed on rinkeby
        functionName: "s_recentWinner",
        params: {},
    })

    useEffect(() => { // Everything there's a change this function is going to be executed
        async function updateUi() {
            const recentWinnerFromCall = await getRecentWinner()
            setRecentWinner(recentWinnerFromCall)
        }
        if (isWeb3Enabled) { // MetaMask is connected
           updateUi()
        }
    },[isWeb3Enabled])


    // return a button with the function
    return(
        <div>
            <button 
                className = "rounded ml-auto font-bold bg-blue-500"
                onClick={async () => {
                    await enterRaffle()
                }}
                >Enter Lottery!!!</button>
            <div>The Recent Winner was: {recentWinner} </div>
        </div>
    )
}

