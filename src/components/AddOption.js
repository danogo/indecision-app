import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: null
  };

  handleAddOption = e => {
    e.preventDefault();
    const inputValue = e.target.elements.option.value.trim();
    const error = this.props.onAddOption(inputValue);
    // clear input only if submitted value is correct
    if (!error) {
      e.target.elements.option.value = '';
    }
    // otherwise set proper error to show, and leave input value as it is to give user chance to correct
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption} >
          <input className="add-option__input" type="text" name="option"/>
          <input className="btn" type="submit" value="Add Option"/>
        </form>
      </div>
    );
  }
}