'use client';

import { fetchBarApi } from '@/lib/redux'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBarApi())
    })

    return (
        <div className='min-h-screen max-h-screen overflow-hidden'>
            <Header />
            <main className='relative z-10 min-h-full'>
                <LeftPanel />
            </main>
        </div>
    )
}
