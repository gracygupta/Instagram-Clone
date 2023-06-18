import { useEffect } from "react";

export default function NotFound(){
    useEffect(()=>{
        document.title = '404 Not Found!';
    },[])
    return(
        <div className="bg-gray-background flex justify-center">
            <div className="mx-auth max-w-screen-lg flex justify-center">
                <p claasNAme="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    )
}