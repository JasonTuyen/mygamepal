'use client';

import { useRouter } from "next/navigation";

export default function ButtonRemove({id, email} : {id:any , email:any}){
    const router = useRouter();
    const handleClick = async () => {
        const response = await fetch(`/api/data/remove`, {
            method: 'POST',
            body: JSON.stringify({
                gid: id,
                uemail: email
            }),
          });
        if(response.status == 200){
            console.log(response)
            router.refresh()
        }
        if(response.status == 500){
            console.log(response)
        }
    };
    return (
        <button className="btn-xs btn-accent" onClick={handleClick}>-</button>
    );
}