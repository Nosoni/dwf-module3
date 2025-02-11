import React, { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import imageProduct1 from "../assets/image-product-1.jpg";
import imageProduct2 from "../assets/image-product-2.jpg";
import imageProduct3 from "../assets/image-product-3.jpg";
import imageProduct4 from "../assets/image-product-4.jpg";
import imageProduct1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../assets/image-product-4-thumbnail.jpg";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [mainImage, setMainImage] = useState(imageProduct1);
  const [imageIndex, setImageIndex] = useState(0);

  const handleThumbnailClick = (e) => {
    setMainImage(() => e.target.dataset.url);
    setImageIndex(() => Number(e.target.dataset.index));
  };

  return (
    <div className='gallery'>
      <div className='img-wrapper'>
        <div className='main-img'>
          <img src={mainImage} alt='shoes' onClick={() => setOpen(true)} />
        </div>

        <div className='thumbnails'>
          <img
            onClick={handleThumbnailClick}
            src={imageProduct1Thumbnail}
            data-url={imageProduct1}
            data-index='0'
            alt='shoes'
            className={mainImage === imageProduct1 ? "active-thumb" : ""}
          />
          <img
            onClick={handleThumbnailClick}
            src={imageProduct2Thumbnail}
            data-url={imageProduct2}
            data-index='1'
            alt='shoes'
            className={mainImage === imageProduct2 ? "active-thumb" : ""}
          />
          <img
            onClick={handleThumbnailClick}
            src={imageProduct3Thumbnail}
            data-url={imageProduct3}
            data-index='2'
            alt='shoes'
            className={mainImage === imageProduct3 ? "active-thumb" : ""}
          />
          <img
            onClick={handleThumbnailClick}
            src={imageProduct4Thumbnail}
            data-url={imageProduct4}
            data-index='3'
            alt='shoes'
            className={mainImage === imageProduct4 ? "active-thumb" : ""}
          />
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={[
          {
            src: imageProduct1,
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: imageProduct2,
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: imageProduct3,
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: imageProduct4,
            alt: "image 1",
            width: 500,
            height: "auto",
          },
        ]}
      />
    </div>
  );
};

export default Gallery;
