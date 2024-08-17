import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { loadImages } from "./sdgsImages";

const SdgsItem = ({ numbers }) => {
  const [images, setImages] = useState({
    sm: {},
    md: {},
    lg: {},
  });

  useEffect(() => {
    const fetchImages = async () => {
      const sizes = ["sm", "md", "lg"];

      const imagesBySize = await Promise.all(
        sizes.map(async (size) => {
          const imageKeys = numbers.map((num) => `${num}_${size}`);
          const images = await loadImages(imageKeys);
          return { [size]: images };
        })
      );
      const transformedImages = imagesBySize.reduce((acc, cur) => {
        return { ...acc, ...cur };
      }, {});
      setImages(transformedImages);
    };

    fetchImages();
  }, [numbers]);

  return (
    <>
      <div className="hidden justify-center gap-x-[30px] md:flex">
        {Object.entries(images.lg).map(([key, src]) => (
          <img className="w-[70px]" key={key} src={src} alt={`SDGS ${key}`} loading="lazy" />
        ))}
      </div>
      <div className="hidden justify-center gap-x-[20px] sm:flex md:hidden">
        {Object.entries(images.md).map(([key, src]) => (
          <img className="w-[60px]" key={key} src={src} alt={`SDGS ${key}`} loading="lazy" />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[14px] sm:hidden">
        {Object.entries(images.sm).map(([key, src]) => (
          <img className="w-[110px]" key={key} src={src} alt={`SDGS ${key}`} loading="lazy" />
        ))}
      </div>
    </>
  );
};

SdgsItem.propTypes = {
  numbers: PropTypes.instanceOf(Array).isRequired,
};

export default SdgsItem;
