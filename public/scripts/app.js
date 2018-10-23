"use strict";

console.log('App is running!'); // JSX - JavaScript XML, JavaScript Syntax Extension

var template = React.createElement("p", null, "Indecision app");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
