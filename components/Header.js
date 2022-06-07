// This file is used to interact with web3uikit from moralis to interact with the front-end
// NOTICE: we are NOT USING MORALIS SERVER - just the tools

import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row"> 
            <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav> 
    )
}