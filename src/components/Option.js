import React from 'react';

const Option = props => {
  const onClickRemove = () => props.onDeleteOption(props.optionText);
  return (
    <div>
      <p>{props.optionText}</p>
      <button onClick={onClickRemove}>Remove</button>
    </div>
  );
};

export default Option;