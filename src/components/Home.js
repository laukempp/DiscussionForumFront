// Index-sivu
import React from 'react';
/* import ReactDom from 'react-dom'; */
import { images } from './Images';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';

const initial_index = 0

function Home() {
    const [index, setIndex] = React.useState(initial_index)

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length -1){
                setIndex(initial_index)
            } else {
                setIndex(index + 1)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [index])

        return (
            <div className="galleryDiv">
            <h1 className="homeHeader">Tervetuloa <b>Tietotulvaan</b></h1>
            <h3 className="homeHeader">Sinun koodiyhteisösi</h3>
            <Gallery
            className="gallery"
            style={{
                width: '75vh'
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}>
                {images.map(image => (
                    <GalleryImage objectFit="cover" src={image} />
                ))}
            </Gallery>
            <div className="homeButton">
            <Link to="/topics">
                <Button className="homeBtn" color="dark">Tästä keskustelemaan</Button>
            </Link>
            </div>
            </div>
        )
}
export default Home;