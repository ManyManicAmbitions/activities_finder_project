'use client';

import Link from 'next/link'
import '../app/style.css';
 
export default function Nav(){
    return(
        <nav>
            <ul>
                
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Events/123">Events</Link></li>
            <li><Link href="/Favourites">Favourites</Link></li>
                
            </ul>
        </nav>
    )
}