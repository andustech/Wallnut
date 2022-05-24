import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Media from '../Media';

const CarouselA = (props) => {
  const { images, watchForReset } = props;
  const containerRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOnScroll = () => {
    const scrollPos = containerRef.current.scrollLeft;
    const threshold = 5;
    const eachImageWidth = containerRef.current.scrollWidth / containerRef.current.children.length;
    const imagePositions = Array.from(containerRef.current.children).map((_child, i) =>
      Math.round(i * eachImageWidth)
    );

    const index = imagePositions.findIndex(
      (pos) => pos - threshold > scrollPos || scrollPos < pos + threshold
    );

    setCurrentImageIndex(index);
  };

  const handleThumbnailClick = (i) => {
    const pos = containerRef.current.children[i].getBoundingClientRect();

    containerRef.current.scrollTo(containerRef.current.scrollLeft + pos.left, 0);
    setCurrentImageIndex(i);
  };

  useEffect(() => {
    handleThumbnailClick(0);
  }, [watchForReset]);

  return (
    <>
    {images.length > 1 && (
      <>
        <div className="flex flex-col mr-12">
          {images.map((image, i) => (
            <Media
              key={i}
              image={image.url}
              currentImage={currentImageIndex === i}
              onClick={() => handleThumbnailClick(i)}
              thumbnail
              alt={image.alt}
            />
          ))}
        </div>
      </>
    )}
    <div className="lg:relative w-11/12 lg:w-5/12">
      <div className="w-full h-full">
        <CarouselContainer ref={containerRef} onScroll={handleOnScroll}>
          {images.map((image, i) => (
            <Media
              key={i}
              image={image.url}
              alt={image.alt}
            />
          ))}
        </CarouselContainer>
      </div>
    </div>
    </>
  );
};

CarouselA.defaultProps = {
  watchForReset: '',
  overlayImage: '',
  overlayImageMobile: '',
};

CarouselA.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  watchForReset: PropTypes.string,
  overlayImage: PropTypes.string,
  overlayImageMobile: PropTypes.string,
};

const CarouselContainer = styled.div.attrs({
  className: 'relative',
})`
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
    vertical-align: top;
  }
`;

export default CarouselA;