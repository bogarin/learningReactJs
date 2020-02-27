"use strict";

var count = 0;
var app = {
  title: "Insercision App",
  subtitle: "Put your life in the hands of a computer",
  // options: ["One", "Two"]
  options: []
};

var addOne = function addOne() {
  count += 1;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count -= 1;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    renderFormApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderFormApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.random();
  console.log(randomNum); // renderFormApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), React.createElement("button", {
    onClick: minusOne
  }, "-1"), React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(templateTwo, app);
};

var renderFormApp = function renderFormApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? "Estas son tus opciones" : "No hay opciones"), React.createElement("button", {
    onClick: onMakeDecision
  }, "What should i do?"), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
}; // renderCounterApp();


renderFormApp();
