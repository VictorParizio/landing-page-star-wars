import React from 'react';
import './TopButton.css'

export default function TopButton() {
    return (
        <button className='top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></button>
    );
}