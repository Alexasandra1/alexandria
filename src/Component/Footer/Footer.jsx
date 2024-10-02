// import React, { useState, useEffect } from "react"
// import iconTel from "../../image/iconTel.png"
// import iconEmail from "../../image/iconEmail.png"
// import iconHour from "../../image/iconHour.png"
// import logotip from "../../../public/Data/History/historyOfDetai.png"
import './Footer.scss'

export function Footer() {

    return (
        <div className="footer__container">
            <footer className="footer__footer">
                <div className="footer__footer__column">
                </div>
                <div className="footer__footer__column">
                    <div className="footer__footer__column__text">info@aleksandriya-museum.by</div>
                    <div className="footer__footer__column__text">Copyright 2024; Designed by Belarusian Russian university</div>
                </div>
                <div className="footer__footer__column">
                    <div className="footer__footer__column__text">+375 (222) 77-88-99</div>
                    <div className="footer__footer__column__text">Пн-Пт с 09:00 до 17:00, Сб-Вс с 10:00 до 15:00</div>
                </div>
            </footer>
        </div>
    )
}
