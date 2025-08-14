'use client';
import {useState} from "react";
import Nav from "../components/Nav";
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };
    return (
        <div>
            <Nav/>
            <main>
            <h1 className="text-3xl font-bold text-amber-300">Home Page</h1>
            <SearchBar onSearch={handleSearch}/>
            {searchTerm && <p>Searching for:{searchTerm}</p>}
            </main>
            <Footer/>
        </div>
    );
  
}