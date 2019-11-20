import React from 'react';
import {connect} from 'react-redux';
import {removeFeature, buyItem} from './actions/index';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  
  const removeFeature = item => {
    this.props.removeFeature(item);
  };

  const buyItem = item => {
    this.props.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}/>
        <Total />
      </div>
    </div>
  );
};

export default App;
