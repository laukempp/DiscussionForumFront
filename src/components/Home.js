// Index-sivu
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { images } from './Images';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

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
            <div className="gallery">
            <h2>Tervetuloa Koodifoorumille</h2>
            <Gallery
            style={{
                width: '100vh',
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}>
                {images.map(image => (
                    <GalleryImage objectFit="cover" src={image}/>
                ))}
            </Gallery>
            </div>
        )
}
export default Home;