// hooks/useSwipeCarousel.js
import { useSwipeable } from 'react-swipeable';

export const useSwipeCarousel = ({ onNext, onPrev }) => {
  return useSwipeable({
    onSwipedLeft: () => onNext && onNext(),
    onSwipedRight: () => onPrev && onPrev(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });
};
