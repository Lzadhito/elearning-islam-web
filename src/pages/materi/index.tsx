import { NextPage } from "next"
import Image from "next/image"
import Breadcrumb from "./components/Breadcrumb"

const Materi: NextPage = () => {
    

    return (
        <div className="flex flex-col h-screen">
            <div className="basis-16 bg-[#EFC737]">
                <div className="pl-5 pt-2">
                    <Image src={"/logo.png"} width={40} height={40}/>
                </div>
            </div>
    
            <div className={`basis-84 h-[5000px] flex flex-row`}>
                <div className="basis-64 bg-[#F1F1F1]">
                    ceritanya sidebar
                </div>
                <div>
                    <Breadcrumb />
                </div>
            </div>
        </div>
    )
}

    

export default Materi