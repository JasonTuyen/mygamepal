'use client';

import { redirect } from 'next/navigation';
import {FormEvent} from 'react';

export default function RegisterForm(){
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            username: formData.get('username'),
            password: formData.get('password'),
          }),
        });
        if(response.ok){
            redirect("http://localhost:3000")
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto max-w-md">
            <input name="username" type="text" placeholder="Username" className="input input-bordered input-secondary" />
            <input name="password" type="password" placeholder="Password" className="input input-bordered input-secondary" />
            <button type="submit" className="btn btn-accent">Register</button>
        </form>
    );
}