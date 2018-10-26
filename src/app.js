class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options : []
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(newOption) {
    if (!newOption) {
      return 'Enter valid value to add an item';
    } else if (this.state.options.includes(newOption)) {
      return 'This option already exists'
    }

    this.setState(prevState => {
      return {
        options: [...prevState.options, newOption]
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          onPick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          onDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption onAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.onPick} 
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  populateOptions(optionsArr) {
    return optionsArr.map(option => (
      <Option key={option} optionText={option} />
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onDeleteOptions}>Remove All</button>
        {this.populateOptions(this.props.options)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
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
    e.target.elements.option.value = '';

    const error = this.props.onAddOption(inputValue);
    this.setState(() => {
      return { error };
    })
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));