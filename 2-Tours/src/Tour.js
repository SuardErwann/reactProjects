import React, { useState } from 'react';

const Tour = ({id, image, info, name, price}) => {
  const [readMore, setReadMore] = useState(false);
  const toggleRead = () => {
    setReadMore(!readMore);
  }

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <footer>
      <h4 className='tour-price'>{price}$</h4>
      <p>{readMore ? info : `${info.substring(0,150)}...`
        }</p> <button className='btn' onClick={() => toggleRead()}>
          {readMore?'Show less' : 'Read more'}
        </button>
      <button className='delete-btn'>Delete</button>
      </footer>
    </article>
  );
};

export default Tour;
