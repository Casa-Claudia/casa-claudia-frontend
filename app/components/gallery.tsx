"use client";
import React, { useState, useEffect } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery({ image_names }: { image_names: string[] }) {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const photosData = await Promise.all(
        image_names.map(async (picture) => {
          const imgPath = `/galerija/${picture}`;
          const img = new Image();
          img.src = imgPath;

          await new Promise((resolve) => {
            img.onload = () => resolve(null);
          });

          const height = img.height;
          const width = img.width;

          return { src: imgPath, height, width };
        })
      );
      setPhotos(photosData);
    };

    loadPhotos();
  }, [image_names]);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={140}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
