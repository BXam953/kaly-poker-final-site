import Image from "next/image"

export default function Landing(props){
    return(
        <div>
        <div className="">
            <Image src={`../static/images/${props.img}`} alt="" />
        </div>
        <div>
            {props.children}
        </div>
        </div>
        
    )
}