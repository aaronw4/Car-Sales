import React from 'react';

const Total = props => {
  let costArray = props.car.features.map(feature => feature.price);
  let addedCost = costArray.reduce((total, price) => total + price, 0);
  
  console.log(props.car.features)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + addedCost}</h4>
    </div>
  );
};

export default Total;
