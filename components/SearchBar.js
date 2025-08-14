'use client';
import {useState} from 'react';

export default function SearchBar({onSearch}) {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch){
            onSearch(term);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 my-4">
            <input
            type="text"
            placeholder="Search activities/events"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="border p-3 flex-1 rounded-2xl"/>

            <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Search
            </button>

        </form>
    );
}