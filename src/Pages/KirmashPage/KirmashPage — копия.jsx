import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import SimpleImageSlider from "react-simple-image-slider";
import './KirmashPage.scss'

export function KirmashPage() {
    const { year } = useParams();
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/api/getKirmashPhotoUrlsByYear/${year}`)
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
        <div className="kirmashPage">
            <Header></Header>
            <div className="kirmashPage__container">
            <div>
                <h1 className="friendsPage__container__info">Купальскi кiрмаш “Александрыя збiрае сяброу</h1>
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
    )
}
