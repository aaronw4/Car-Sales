import React from 'react';
import {connect} from 'react-redux';
import {removeFeature, buyItem} from './actions/index';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  
  const removeFeature = item => {
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.buyItem(item);
  };
  console.log(props.car)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}/>
        <AddedFeatures removeFeature={removeFeature} car={props.car} additionalPrice={props.additionalPrice}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} additionalPrice={props.additionalPrice} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {removeFeature, buyItem}
)(App);
