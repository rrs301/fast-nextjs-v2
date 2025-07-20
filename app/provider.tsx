"use client"

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect } from 'react';

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = useUser();

    useEffect(() => {
        const createNewUser = async () => {
            if (user) {
                await axios.post('/api/inngest', {
                    email: user.primaryEmailAddress?.emailAddress,
                    userId: user.id,
                });
            }
        };

        createNewUser();
    }, [user]);

    return <div>{children}</div>;
}

export default Provider;

