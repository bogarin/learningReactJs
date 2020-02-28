let count = 0;
const app = {
  title: "Insercision App",
  subtitle: "Put your life in the hands of a computer",
  // options: ["One", "Two"]
  options: []
};

const addOne = () => {
  count += 1;
  renderCounterApp();
};
const minusOne = () => {
  count -= 1;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};
const isDisabled = () => app.options.length === 0;

const onFormSubmit = event => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    renderFormApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderFormApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
  alert(option);
  // renderFormApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, app);
};

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? "Estas son tus opciones" : "No hay opciones"}
      </p>
      <button disabled={isDisabled()} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// renderCounterApp();
renderFormApp();
