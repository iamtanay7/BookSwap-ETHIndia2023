import React, { useState } from "react";
import Link from "next/link";

const NavIcons = () => {
  const [connected, setConnected] = useState(false);

  const connectToWallet = async () => {
    try {
      if (window.ethereum) {
        // Requesting access to the MetaMask wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Checking if the connection is successful
        if (window.ethereum.selectedAddress) {
          setConnected(true);
          console.log(
            "Connected to MetaMask:",
            window.ethereum.selectedAddress
          );
          // You can perform further actions upon successful connection here
        }
      } else {
        console.log("MetaMask not detected");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      setConnected(false);
    }
  };
  return (
    <div className="-ml-12 -mr-8 justify-between gap-4 hidden md:flex items-center">
      <Link href="/uploadImage">
        <div className="text-zinc-600  text-[16px] font-semibold">Upload</div>
      </Link>
      <Link href="/chats">
        <div className="text-zinc-600  text-[16px] font-semibold">Chat</div>
      </Link>
      <Link href="/wishlist">
        <div className="text-zinc-600  text-[16px] font-semibold">Wishlist</div>
      </Link>

      {/* <Link href="/login">
        <li className="hidden md:flex text-zinc-600  text-[16px] font-semibold justify-center items-center  transition-transform active:scale-90">
          Login
        </li>
      </Link> */}
      <Link href="">
        {/* <li
          // onClick={""}
          className="hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-[#228D5A] rounded-lg transition-transform hover:bg-[#228D5A]/[0.8] active:scale-90"
        >
          Connect Wallet
        </li> */}
        {!connected ? (
          <button
            className="hidden md:flex h-10 px-5  text-[14px] leading-tight text-white justify-center items-center  bg-[#228D5A] rounded-lg transition-transform hover:bg-[#228D5A]/[0.8] active:scale-90"
            onClick={connectToWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <p className="text-green-500  text-lg">Connected to MetaMask!</p>
        )}
      </Link>
      {/* <div>
        {!connected ? (
          <button onClick={connectToWallet}>Connect to MetaMask</button>
        ) : (
          <p>Connected to MetaMask!</p>
        )}
      </div> */}
    </div>
  );
};

export default NavIcons;
