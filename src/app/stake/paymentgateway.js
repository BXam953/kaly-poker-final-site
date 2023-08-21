import { useState } from "react"
import {FaDollarSign} from 'react-icons/fa6'
import Pop from "../components/popover";
import {FaCircleArrowRight} from 'react-icons/fa6'
import {AiFillDollarCircle} from 'react-icons/ai'
import { FaCircleXmark } from "react-icons/fa6";
import axios from "axios";

export default function PaymentGateway(){
    

    const [price, setPrice] = useState('');
    const [success, setSuccess] = useState(true);

    async function handlePayment(e){
        e.preventDefault();
        const {data} = await axios.post('/stake/api', 
        {
            priceID: price
        }, 
        {
            headers: {
                "Content-Type":"application/json",
            },
        });
        window.location.assign(data);
        setSuccess(true);
        console.log(price);
    }

    return(
        <Pop> 
            <form onSubmit={handlePayment}>
            <div className=" flex justify-center items-center gap-4 p-4 text-[#DE2A33] w-screen">
            <label htmlFor="">Enter Amount (CAD): </label>
            <input type="text" placeholder="(+5% Tax)" autoFocus className="outline-none border-2 p-2 border-[#DE2A33] placeholder-[#DE2A33] bg-black rounded-md w-[20vw] h-[5vh]" onChange={e => setPrice(e.target.value)} onInput={e => {e.target.value = e.target.value.replace(/[^0-9]/g, '')}} />
            </div>
            </form>
        </Pop>
    )
}