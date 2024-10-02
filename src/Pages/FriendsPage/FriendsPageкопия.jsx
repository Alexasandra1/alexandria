import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './FriendsPage.scss'

export function FriendsPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/getFriendsPhotoUrlsByYear/${year}`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const photoUrls = data;
                    setImages(photoUrls.map(url => ({ url })));
                } else {
                    console.error('Expected an array of URLs');
                }
            })
            .catch(error => console.error(error));
    }, [year]);
    return (
        <div className="friendsPage">
            <Header></Header>
            <div className="friendsPage__container">
            <div>
                <h1 className="friendsPage__container__info">Сябры у Александрыi</h1>
                <div className="slider_size">
                        {images.length > 0 && (
                            <SimpleImageSlider
                                images={images}
                                showBullets={true}
                                showNavs={true}
                                loop={true}
                                autoPlay={true}
                                autoPlayDelay={2.0}
                            />
                        )}
                    </div>
                </div>
                <LeftPanel activeButton="festival"></LeftPanel>
            </div>
            <Footer></Footer>
        </div>
    );
}
