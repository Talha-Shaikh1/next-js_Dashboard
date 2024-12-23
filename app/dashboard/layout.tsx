import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

export default function Layout( {children}: {children:React.ReactNode}){
    return(
        <div className='flex flex-col md:flex-row h-screen md:overflow-hidden'>
            <div className='flex-non w-full md:w-64'>
                <SideNav />
            </div>
            <div className='flex-grow p-6 md:overflow-y-hidden md:p-12'>{children}</div>
        </div>
    )
}