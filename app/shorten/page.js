"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const shorten = () => {

    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const baseUrl = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"; // Default fallback
                setGenerated(`${baseUrl}/${shortUrl}`);                
                setShortUrl("")
                console.log(result);
                alert(result.message)
            })

    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-3'>
                <input type="text"
                    value={url}
                    className='p-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }}
                />
                <input type="text"
                    value={shortUrl}
                    className='p-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL'
                    onChange={e => { setShortUrl(e.target.value) }}
                />
                <button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 text-white my-3' onClick={generate}>Generate</button>
            </div>

            {generated && <>
                <span className='font-bold text-lg'>Your Link</span> <code><Link target="_blank" href={generated}>{generated}</Link>
            </code></>}
        </div>

    )
}

export default shorten
