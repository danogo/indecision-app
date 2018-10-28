import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const inputValue = e.target.elements.option.value.trim();
    const error = this.props.onAddOption(inputValue);
    // clear input only if submitted value is correct
    if (!error) {
      e.target.elements.option.value = '';
    }
    // otherwise set proper error to show, and leave input value as it is to give user chance to correct
    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <input type="submit" value="Add Option"/>
        </form>
      </div>
    );
  }
}