class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : props.options
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

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
}
Header.defaultProps = {
  title: 'Indecision'
};

const Action = props => {
    return (
      <div>
        <button 
          onClick={props.onPick} 
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.onDeleteOptions}>Remove All</button>
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

const Option = props => {
    const onClickRemove = () => props.onDeleteOption(props.optionText);
    return (
      <div>
        <p>{props.optionText}</p>
        <button onClick={onClickRemove}>Remove</button>
      </div>
    );
};

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));