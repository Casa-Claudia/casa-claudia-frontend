'use client';
import React, { useState, useEffect } from 'react';
import PhotoAlbum, { Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { images } from './data';
import Image from 'next/image';
import Images from './images';

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [photos] = useState<Photo[]>(
    images.map((image) => ({
      src: image.src,
      alt: image.alt,
      width: 1080,
      height: 1080,
    })),
  );

  return (
    <>
      <Images onClick={setIndex} />

      <Lightbox
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
