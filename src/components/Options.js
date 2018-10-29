import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <button onClick={props.onDeleteOptions}>Remove All</button>
      { props.options.length === 0 && <p>Please add some options to choose from.</p>}
      {
        props.options.map(option => (
          <Option 
            key={option} 
            optionText={option} 
            onDeleteOption={props.onDeleteOption}
          />
        ))
      }
    </div>
  );
};

export default Options;