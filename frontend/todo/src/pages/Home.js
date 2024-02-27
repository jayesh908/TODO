import React from 'react'
import Nave from '../components/Nave'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Nave />
            <Outlet />
        </div>
    )
}

export default Home
