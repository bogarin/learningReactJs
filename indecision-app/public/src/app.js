class IndecisionComponentApp extends React.Component {
  render() {
    const title = "Insercision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["One", "Two", "three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions options={options} />
        <BodyOptions options={options} />
        <FormAddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2> {this.props.subtitle}</h2>
      </div>
    );
  }
}

class Actions extends React.Component {
  render() {
    return (
      <div>
        <BtnDecision options={this.props.options} />
        <BtnRemoveAll options={this.props.options} />
      </div>
    );
  }
}

class FormAddOption extends React.Component {
  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if (option) {
      alert(option);
      // app.options.push(option);
      // event.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class BtnDecision extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return <button onClick={this.handlePick}> what shoul i do?</button>;
  }
}

class BtnRemoveAll extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return <button onClick={this.handleRemoveAll}> Remove All</button>;
  }
}

class BodyOptions extends React.Component {
  render() {
    return (
      <div>
        <IsOption options={this.props.options} />
        <Options options={this.props.options} />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        {this.props.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
    );
  }
}

class IsOption extends React.Component {
  render() {
    return (
      <p>
        {this.props.options.length > 0
          ? "Estas son tus opciones"
          : "No hay opciones"}
      </p>
    );
  }
}
ReactDOM.render(<IndecisionComponentApp />, document.getElementById("app"));
