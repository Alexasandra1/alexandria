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
    const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
    const year2012 = ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Сябры ў Александрыi', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае усяброў”', 'Выступ Прэзiдэнта Рэспублiкi Беларусь на адкрыццi фестывалю']
    const routes = {
        'Гала-канцэрт': '/concert',
        'Гульнявая забаўляная праграма': '/program',
        'Сябры ў Александрыi': '/friends',
        'Александрыйскi гандаль': '/belarussian-trade',
        'Купальскi кiрмаш “Александрыя збiрае сяброў”': '/kirmash',
        'Выступ Прэзiдэнта Рэспублiкi Беларусь на адкрыццi фестывалю': '/president'
    };
    const yearsLinks = {
        '2012': ['Гульнявая забаўляная праграма'],
        '2013': ['Гульнявая забаўляная праграма', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2014': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2015': ['Гала-канцэрт', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”', 'Гульнявая забаўляная праграма'],
        '2016': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Сябры ў Александрыi', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2017': ['Гала-канцэрт', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”', 'Гульнявая забаўляная праграма'],
        '2018': ['Гала-канцэрт', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”', 'Гульнявая забаўляная праграма',],
        '2019': ['Гала-канцэрт', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”', 'Гульнявая забаўляная праграма'],
        '2020': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Сябры ў Александрыi', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2021': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2022': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Сябры ў Александрыi', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”'],
        '2023': ['Гала-канцэрт', 'Гульнявая забаўляная праграма', 'Сябры ў Александрыi', 'Александрыйскi гандаль', 'Купальскi кiрмаш “Александрыя збiрае сяброў”', 'Выступ Прэзiдэнта Рэспублiкi Беларусь на адкрыццi фестывалю'],
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://backend:4000/api/folderNames');
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
            setSubfolderLinks(yearsLinks[folderName])
            // try {
            //     const response = await fetch(http://backend:4000/api/getSubfolderLinks/${folderName});
            //     var subfolders = await response.text();

            //     subfolders = subfolders.replace(/[\[\]"]/g, '');
            //     console.log(subfolders);
            //     setSubfolderLinks(subfolders.split(','));
            // } catch (error) {
            //     console.error('Ошибка при получении ссылок на подпапки:', error);
            // }
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