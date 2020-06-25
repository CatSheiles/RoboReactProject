import React from 'react';

const Card = (props) => {
  const { name, email, id } = props;
    return (
      //this is tachyon styling bg-color dib br3 pa3 ma2 grow si styling
      //tc is text centre,bg is background, dib is display-inline-block, br border, pa padding ma margin, grow is animation
      <div 
        className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>
    );
}
export default Card;
