console.log('App is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Do what we tell you to do :)',
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.option.value;
  if (inputValue) {
    app.options.push(inputValue);
    event.target.elements.option.value = '';
    renderTemplate();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderTemplate();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const randomOption = app.options[randomNum];
  alert(randomOption);
}

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'Sorry, there are no options to show.'}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map(opt => <li key={opt}>{opt}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderTemplate();