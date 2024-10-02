import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import festival from "../../../src/image/festival.png";
import { Button } from "../../Component/Button/Button";
import './FestivalPage.scss';

export function FestivalPage({ activeButton }) {
    const [folderNames, setFolderNames] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [subfolderLinks, setSubfolderLinks] = useState({});

    const navigate = useNavigate();
    const years = ['2010', '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']
    const routes = {
        'Гала-канцэрты': '/concert',
        'Гульнявая забаўляная праграма': '/program',
        'Сябры у Александрыi': '/friends',
        'Александрыйскi гандаль': '/belarussian-trade',
        'Купальскi кiрмаш “Александрыя збiрае сяброу”': '/kirmash',
        'Выступ Прэзiдэнта Рэспублiкi Беларусь на адкрыццi фестывалю': '/president'
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/folderNames');
                const data = await response.text();
                const newData = data.replace(/[\[\]"]/g, '');
                console.log(data);
                if (newData.length > 0) {
                    const arrayData = newData.split(',');
                    setFolderNames(arrayData);
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        fetchData();
    }, []);


    const handleFolderClick = async (folderName) => {
        if (selectedFolder === folderName) {
            setSelectedFolder(null);
        } else {
            setSelectedFolder(folderName);
            try {
                const response = await fetch(`http://localhost:4000/api/getSubfolderLinks/${folderName}`);
                var subfolders = await response.text();

                subfolders = subfolders.replace(/[\[\]"]/g, '');
                console.log(subfolders);
                setSubfolderLinks(subfolders.split(','));
            } catch (error) {
                console.error('Ошибка при получении ссылок на подпапки:', error);
            }
        }
    };

    return (
        <div className="festivalPage">
            <Header />
            <div className="festivalPage__container">
                <div className="festivalPage__informationBlock">
                    <img className="festivalPage__informationBlock__img__festival" src={festival} alt="" />
                    <div className="folderButtons">
                        {years.map((folderName) => (
                            <div className="folderButtonDiv" key={folderName}>
                                <Button
                                    wordButton={folderName}
                                    styleButton={`folderButtonComp ${activeButton === '' ? 'active' : ''}`}
                                    onClick={() => handleFolderClick(folderName)}
                                    isActive={selectedFolder === folderName}
                                />
                                {selectedFolder === folderName && (
                                    <div className="folderLinks">
                                        {Array.isArray(subfolderLinks) && subfolderLinks.map((subfolder) => (
                                            <ul>
                                                <li onClick={() => navigate(`${routes[subfolder]}/${selectedFolder}`)}>{subfolder}</li>
                                            </ul>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
                <LeftPanel activeButton="festival" />
            </div>
            <Footer />
        </div>
    );
}
