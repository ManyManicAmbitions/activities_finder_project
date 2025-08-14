'use client';
import { useState } from 'react';

function ShowHideButton({ message = "Bonjour"}){
    const [ShowHideButtonEnabled, setShowHideButtonEnabled] = useState(false);

    const renderShowHideButton = () => {
        if (ShowHideButtonEnabled) {
            return <p>{message}</p>;
        }
        return null;
    };

    const buttonText = () => {
        if (ShowHideButtonEnabled) {
            return 'Hide';
        } else {
            return 'Show';
        }
    };

    return (
        <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onClick={ () => setShowHideButtonEnabled(!ShowHideButtonEnabled)}>
             {buttonText()}   
            </button>
            {renderShowHideButton()}
        </div>
    );

}

export default function ShowHideButtonDemo() {
    return (
        <div>
            <h1>Show and Hide Buttons</h1>
            <ShowHideButton message='Activities and Events placeholder // This application will find and show information about many activities and events'/>
        </div>
    );
}