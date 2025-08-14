'use client';

import Link from 'next/link'
 
export default function Nav(){
    return(
        <nav className="bg-gray-600 text-white p-3">
            <ul className="flex gap-3">
                
            <li><Link className=" hover:text-gray-800" href="/">Home</Link></li>
            <li><Link className=" hover:text-gray-800" href="/About">About</Link></li>
            <li><Link className=" hover:text-gray-800" href="/Contact">Contact</Link></li>
            <li><Link className=" hover:text-gray-800" href="/Events/123">Events</Link></li>
            <li><Link className=" hover:text-gray-800" href="/Favourites">Favourites</Link></li>
                
            </ul>
        </nav>
    )
}