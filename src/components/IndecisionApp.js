import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }

  componentDidMount() {
    // try to fetch options from localStorage
    try {
      // if fetched options are not null and it is correct json data set state options to that data
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (err) {
      // do nothing if there is an error when parsing json
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
        options : prevState.options.filter(option => option !== optionToRemove) 
      })
    );
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(newOption) {
    if (!newOption) {
      return 'Enter valid value to add an item';
    } 
    
    const duplicate = this.state.options.find(opt => opt.toLowerCase() === newOption.toLowerCase());
    if (duplicate) {
      return 'This option already exists';
    }

    this.setState(prevState => ({ 
      options: [...prevState.options, newOption]}
    ));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          onPick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          onDeleteOptions={this.handleDeleteOptions}
          onDeleteOption={this.handleDeleteOption}
        />
        <AddOption onAddOption={this.handleAddOption}/>
      </div>
    );
  }
}