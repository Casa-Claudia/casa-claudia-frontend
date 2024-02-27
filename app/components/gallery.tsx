"use client";
import { useState } from "react";

import PhotoAlbum, { Photo } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



export default function Gallary({pictures}: {pictures: string[]}) {
    const [index, setIndex] = useState(-1);
    
    const photos = pictures.map((picture, index) => {
        const img = new Image();
        img.src = `/galerija/${picture}`;
        const height = img.height;
        const width = img.width;

        return {
            src: `/galerija/${picture}`,
            height,
            width,
            srcSet: []
        };
    });

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150} 
        onClick={({ index }) => setIndex(index)} />

      <Lightbox   styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}