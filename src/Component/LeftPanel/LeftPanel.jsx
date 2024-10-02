import React from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button"
import ornament from "../../image/ornament.png"

import './LeftPanel.scss'

export function LeftPanel({ activeButton }) {
    const navigate = useNavigate();

    async function handleMainClick() {
        navigate("/main");
    }

    async function handleMuseumClick() {
        navigate("/museum");
    }
    async function handleContsctClick() {
        navigate("/contacts");
    }
    async function handleFestivalClick() {
        navigate("/festival");
    }

    return (
        <div className="leftPanel">
            <div className="header__logotip"><img className="ornament" src={ornament} alt="ornament" /></div>
            <div className="leftPanel__buttonContainer">
                <Button wordButton="История" onClick={handleMainClick}
                    styleButton={`leftPanel__buttonContainer__button ${activeButton === 'history' ? 'active' : ''}`} />
                <Button wordButton="Фестиваль" onClick={handleFestivalClick}
                    styleButton={`leftPanel__buttonContainer__button ${activeButton === 'festival' ? 'active' : ''}`} />
                <Button wordButton="Музей" onClick={handleMuseumClick}
                    styleButton={`leftPanel__buttonContainer__button ${activeButton === 'museum' ? 'active' : ''}`} />
            </div>
        </div>
    )
}
