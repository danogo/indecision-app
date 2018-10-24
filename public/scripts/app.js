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

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var randomOption = app.options[randomNum];
  alert(randomOption);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? 'Here are your options:' : 'Sorry, there are no options to show.'), React.createElement("button", {
    onClick: onMakeDecision,
    disabled: app.options.length === 0
  }, "What should I do?"), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (opt) {
    return React.createElement("li", {
      key: opt
    }, opt);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderTemplate();
