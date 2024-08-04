'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Projects(){

    const navigate = useRouter();

    return <div className="flex flex-col items-center justify-center min-h-screen p-20">
        <h1 className="text-orange-600 font-semibold font-mono w-full mb-12 text-2xl relative">
            low level designs
        </h1>
        <div className="flex flex-wrap p-4 gap-2 justify-center">
            <div className="flex gap-2 flex-col">
                <p className="underline">scaling server vertically vs horizontally</p>
                <Image src="/scaling.png" alt="scaling" width={500} height={500} className="border rounded-lg p-2 bg-orange-500 shadow-lg shadow-purple-500/50"/>
            </div>
            <div className="flex gap-2 flex-col">
                <p className="underline">lens-protocol application</p>
                <Image src="/lens-protocol.png" alt="lens-protocol" width={500} height={500} className="border rounded-lg p-2 bg-green-600 shadow-lg shadow-purple-500/50"/>
            </div>
            <div className="flex gap-2 flex-col">
                <p className="underline">tornodo cash</p>
                <Image src="/tornodo.png" alt="cash" width={500} height={500} className="border rounded-lg p-2 bg-red-600 shadow-lg shadow-purple-500/50"/>
            </div>
            <div className="flex gap-2 flex-col">
                <p className="underline">decentralised Finance</p>
                <Image src="/defi.png" alt="defi" width={500} height={500} className="border rounded-lg p-2 bg-blue-500 shadow-lg shadow-purple-500/50"/>
            </div>
            <div className="flex gap-2 flex-col">
                <p className="underline">redis</p>
                <Image src="/redis.png" alt="redis" width={500} height={500} className="border rounded-lg p-2 bg-yellow-500 shadow-lg shadow-purple-500/50"/>
            </div>
            <div className="flex gap-2 flex-col">
                <p className="underline">DDos attack</p>
                <Image src="/ddos.png" alt="ddos" width={500} height={500} className="border rounded-lg p-2 bg-pink-500 shadow-lg shadow-purple-500/50"/>
            </div>
        </div>
        <button onClick={()=>{
            navigate.replace('/');
        }} className="mt-12 border shadow-lg shadow-purple-500/50 p-2 rounded-lg">Home 👋</button>
    </div>
}