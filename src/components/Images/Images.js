import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      if (props.fallback) setFallback(props.fallback);
      else setFallback(images.noImage);
   };

   return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
};
export default Image;
