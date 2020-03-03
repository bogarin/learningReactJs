class IndecisionComponentApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ["One", "Two", "three"]
    };
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

  handleAddOption(option) {
    if (!option) {
      return "Valor invalido intentas ingresar";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "esta opcion ya existe";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = "Insercision App";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions
          hasOtions={this.state.options.length <= 0}
          handleDeleteOptions={this.handleDeleteOptions}
          handlePick={this.handlePick}
        />
        <BodyOptions options={this.state.options} />
        <FormAddOption handleAddOption={this.handleAddOption} />
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
        <BtnDecision
          hasOtions={this.props.hasOtions}
          handlePick={this.props.handlePick}
        />
        <BtnRemoveAll handleDeleteOptions={this.props.handleDeleteOptions} />
      </div>
    );
  }
}

class FormAddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: error
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class BtnDecision extends React.Component {
  render() {
    return (
      <button onClick={this.props.handlePick} disabled={this.props.hasOtions}>
        what shoul i do?
      </button>
    );
  }
}

class BtnRemoveAll extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleDeleteOptions}> Remove All</button>
    );
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
