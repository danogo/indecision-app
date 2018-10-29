import React from 'react';

const Option = props => {
  const onClickRemove = () => props.onDeleteOption(props.optionText);
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button onClick={onClickRemove} className="btn btn--link">Remove</button>
    </div>
  );
};

export default Option;