import React, { VFC } from "react";
import Carousel from "react-image-gallery";
const images = [
  {
    original:
      "https://exclusivetickets.net/wp-content/uploads/2019/07/17-Benefits-of-Going-to-Live-Music-Concerts.png",
    thumbnail:
      "https://exclusivetickets.net/wp-content/uploads/2019/07/17-Benefits-of-Going-to-Live-Music-Concerts.png",
  },
  {
    original:
      "http://res.cloudinary.com/simpleview/image/upload/v1524516762/clients/omaha/Weekend_bbcda3db-c289-49ab-b43c-37bec47cbcd2.jpg",
    thumbnail:
      "http://res.cloudinary.com/simpleview/image/upload/v1524516762/clients/omaha/Weekend_bbcda3db-c289-49ab-b43c-37bec47cbcd2.jpg",
    originalHeight: "400px",
    originalWidth: "100%",
  },
  {
    original:
      "https://musicoomph.com/wp-content/uploads/2018/03/benefits-of-going-to-live-music-concerts.jpg",
    thumbnail:
      "https://musicoomph.com/wp-content/uploads/2018/03/benefits-of-going-to-live-music-concerts.jpg",
    originalHeight: "400px",
    originalWidth: "100%",
  },
  {
    original:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginia/CN17071209P_036_1__e5b741c1-6bd5-4cdc-b4e3-d081cb83f823.jpg",
    thumbnail:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginia/CN17071209P_036_1__e5b741c1-6bd5-4cdc-b4e3-d081cb83f823.jpg",
    originalHeight: "400px",
    originalWidth: "100%",
  },
  {
    original:
      "https://i.insider.com/5e45b2783b62b778762710a4?width=1136&format=jpeg",
    thumbnail:
      "https://i.insider.com/5e45b2783b62b778762710a4?width=1136&format=jpeg",
    originalHeight: "400px",
    originalWidth: "100%",
  },
];

const Gallery: VFC<{ images: string[] }> = ({ images }) => {
  const preparedImages = images.map((image) => ({
    original: `${process.env.BACKEND_URI}/uploads/${image}`,
    thumbnail: `${process.env.BACKEND_URI}/uploads/${image}`,
    originalHeight: "400px",
    originalWidth: "100%",
  }));

  return (
    <div className="gallery">
      <div className="gallery-container container">
        <Carousel items={preparedImages} showPlayButton={false} />
      </div>
    </div>
  );
};

export default Gallery;
