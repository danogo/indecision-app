import React from 'react';

const Action = props => (
  <div>
    <button 
      onClick={props.onPick} 
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;