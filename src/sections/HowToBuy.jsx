import React from 'react'

function HowToBuy() {
  return (
    <div className=" container-wrapper  px-4 relative  " data-aos="fade-right">
         <h1 className=" font-kid font-bold text-4xl sm:text-6xl my-3 text-center pb-4 text-[#bc1d5c]">HOW TO Buy</h1>


         <div className=' flex justify-between items-center gap-4 flex-col sm:flex-row'>

            <div  className=" border-[#bc1d5c]  bg-[#fd8b0000] border-2   py-8 px-4 rounded-2xl shadow-xl w-full sm:w-[250px] h-[200px]">
                <h1 className=' text-2xl font-semibold  pb-2'>
                1. Get Wallet
                </h1>

                <p className=' text-base font font-kido '>
                Download Phantom or another wallet from the app store or desktop users can get the Chrome extension from phantom.app

                </p>
            </div>

            <div  className=" border-[#bc1d5c]  bg-[#fd8b0000] border-2   py-8 px-4 rounded-2xl shadow-xl w-full sm:w-[250px]  h-[200px]">
            <h1 className=' text-2xl font-semibold  pb-2'>
                2. Get SOL
                </h1>
                <p className='font-kido'>
                To buy $PinkSol, have SOL  in your wallet. You can buy SOL on an exchange or swap and transfer to your wallet if needed. 
                </p>
            </div>

            <div  className=" border-[#bc1d5c]  bg-[#fd8b0000] border-2   py-8 px-4 rounded-2xl shadow-xl w-full sm:w-[280px]  h-[200px]">
            <h1 className=' text-2xl font-semibold   pb-2'>
                3. Go to Raydium
                </h1>
                <p  className='font-kido'>
                Visit RAYDIUM.io in the browser of Phantom app or in google chrome,  connect your wallet, enter $PinkSol token address, and confirm the swap.
                </p>
            </div>


            <div  className=" border-[#bc1d5c]  bg-[#fd8b0000] border-2   py-8 px-4 rounded-2xl shadow-xl w-full sm:w-[250px]  h-[200px]">
            <h1 className=' text-2xl font-semibold  pb-2'>
                4. Swap SOL to $PinkSol
                </h1>
                <p className='font-kido'>
                Exchange SOL for $PinkSol, click swap, and confirm it in your wallet.
                </p>
            </div>

         </div>
    </div>
  )
}

export default HowToBuy