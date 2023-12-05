'use client';

import { fetchBarApi, useDispatch } from '@/lib/redux'
import { useEffect } from 'react'


import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import MapContainer from './components/Map/MapContainer';

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBarApi())
    })

    return (
        <div className='min-h-screen max-h-screen flex flex-col overflow-hidden'>
            <Header />
            <LeftPanel />
            <MapContainer />
        </div>
    )
}
