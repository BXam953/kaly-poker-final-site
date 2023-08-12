import Image from "next/image"

export function Section1(props){
    return(
        <div className=" h-screen w-screen flex flex-row justify-between px-10 items-center">
            <div>
                <Image src={`../static/images/${props.img}`} alt="" />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export function Section2(props){
    return(
        <div className=" h-screen w-screen flex flex-row justify-between px-10 items-center">
            <div>
                {props.children}
            </div>
            <div>
                <Image src={`../static/images/${props.img}`} alt="" />
            </div>
        </div>
    )
}