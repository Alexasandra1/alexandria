import React, { useState } from "react"

import './Button.scss'

export function Button(props) {
    const { wordButton, styleButton, onClick, isActive } = props;

    return (
        <div className="button_comp">
            <button
                className={`button_comp__button ${styleButton} ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                {wordButton}
            </button>
        </div>
    );
}
