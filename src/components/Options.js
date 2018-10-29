import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>
      <button onClick={props.onDeleteOptions} className="btn btn--link">Remove All</button>
    </div>
    { props.options.length === 0 && <p className="widget__message">Please add some options to choose from.</p>}
    {
      props.options.map((option, index) => (
        <Option 
          key={option} 
          optionText={option} 
          count={index + 1}
          onDeleteOption={props.onDeleteOption}
        />
      ))
    }
  </div>
);


export default Options;