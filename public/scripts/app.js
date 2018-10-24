"use strict";

console.log('App is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Do what we tell you to do :)',
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var inputValue = event.target.elements.option.value;

  if (inputValue) {
    app.options.push(inputValue);
    event.target.elements.option.value = '';
    renderTemplate();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? 'Here are your options:' : 'Sorry, there are no options to show.'), React.createElement("p", null, app.options.length), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderTemplate();
