// Index-sivu
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { images } from './Images';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { Button } from "reactstrap";

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
            
        }, 3000)
        return () => clearInterval(interval)
    }, [index])

        return (
            <div className="galleryDiv">
            <h1 align="center">Tervetuloa Koodifoorumille!</h1>
            <h4></h4>
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
                <p align="center"><Button color="success">Tästä keskusteluihin</Button></p>
            </div>
        )
}
export default Home;