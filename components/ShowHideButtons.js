'use client';
import { useState } from 'react';

function ShowHideButton({ message = "This application will find and show information about manu activities and events"}){
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
            <button onClick={ () => setShowHideButtonEnabled(!ShowHideButtonEnabled)}>
             {buttonText()}   
            </button>
            {renderShowHideButton()}
        </div>
    );

}

export default function ShowHideButtonDemo() {
    return (
        <div>
            <h1>Show and Hide Button</h1>
            <ShowHideButton message='Activities and Events'/>
        </div>
    );
}