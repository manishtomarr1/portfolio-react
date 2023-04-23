import React, { useRef } from 'react';

const Event = ({ title, description, date, position, isActive }) => {
  const eventRef = useRef(null);

  const style = {
    left: `${position}px`,
    backgroundColor: isActive ? 'blue' : 'gray',
  };

  return (
    <div className="timeline__event" ref={eventRef} style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

export default Event;
