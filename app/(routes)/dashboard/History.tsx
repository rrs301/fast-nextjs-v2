"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function History() {
    const [userHistory, setUserHistory] = useState([]);
    return (
        <div className="mt-5 p-5 border rounded-xl">
            <h2 className="font-bold text-lg"> Previous History</h2>
            <p>What you previously worked on</p>

            {userHistory?.length === 0 &&
                <div className ="flex items-center justify-center flex-col mt-6">
                    <Image src="/idea.png" alt="idea" width={50} height={50} />
                    <h2>You don't have any history</h2>
                </div>
            }
        </div>
    )
}

export default History