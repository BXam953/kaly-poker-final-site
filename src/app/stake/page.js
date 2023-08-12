"use client";

import { useState } from "react";
import {FaCircleArrowRight} from 'react-icons/fa6'
import PaymentGateway from './paymentgateway'
import { ErrorMessage } from "../components/Messages";
import Pop from "../components/popover";




export default function Pay(props){

    const [paymentPassword, setPaymentPassword] = useState('');
    const [success, setSuccess] = useState(0);

    function gateway(){
        if(paymentPassword == process.env.NEXT_PUBLIC_STAKE_PW){
            setSuccess(1);
            console.log("yes");
        } else if(paymentPassword != process.env.NEXT_PUBLIC_STAKE_PW){
            setSuccess(-1);
            console.log("no");
        }
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center">
            {success == 1 && 
                <div className=" h-screen w-screen flex justify-center align-center items-center">
                < PaymentGateway/>
                </div>
            }
            {success == -1 && 
                <div className="h-screen w-screen flex justify-center items-center">
                <ErrorMessage />
                {setTimeout(function(){
                    setSuccess(0);        
                }, 1000)};
                </div>
            }
            {success == 0 && 
                <Pop>
                    <form onSubmit={gateway}>
                    <div className=" flex sm:flex-col justify-center items-center gap-4 p-4 text-[#DE2A33]">
                        <p className="">Enter Password:</p>
                        <input type="password" placeholder="" className="outline-none border-2 p-2 border-[#DE2A33] bg-black w-[20vw] h-[5vh]" onChange={e => setPaymentPassword(e.target.value)} autoFocus/>
                    </div>
                    </form>
                </Pop>
            }
        </div>
    )

}