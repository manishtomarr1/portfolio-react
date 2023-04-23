import React, { useRef, useEffect, useState } from 'react';
import Event from './Event';
import './ScrollingTimeline.css';

const ScrollingTimeline = ({ events }) => {
  const timelineRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const scrollLeftMax = timeline.scrollWidth - timeline.clientWidth;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const scrollLeft = timeline.scrollLeft;
          const percentageScrolled = (scrollLeft / scrollLeftMax) * 100;

          // Do something with the percentageScrolled, such as updating a progress bar or triggering animations

          isScrolling = false;
        });

        isScrolling = true;
      }
    };

    timeline.addEventListener('scroll', handleScroll);

    return () => timeline.removeEventListener('scroll', handleScroll);
  }, [timelineRef]);

  // ...rest of the component
};

export default ScrollingTimeline;
