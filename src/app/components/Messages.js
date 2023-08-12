export function ErrorMessage(props){
    return(
        <div className=" h-1/4 w-1/4 flex-col gap-2 bg-black text-red-400 border-2 border-red-400 flex justify-center items-center">
            <p>Access Denied: Wrong Password</p> 
        </div>
    )
}

export function SuccessMessage(props){
    return(
        <div className=" h-1/4 w-1/4 flex-col gap-2 bg-black text-green-600 border-2 border-green-600 flex justify-center items-center">
            <p>Access Granted: Welcome</p> 
        </div>
    )
}