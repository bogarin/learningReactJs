class IndecisionComponentApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { options: props.options };
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionRemove !== option;
      })
    }));
  }

  // handleDeleteOption(option) {
  //   const arrayOptions = this.handleSearchDeleteOption(option);
  //   this.setState(() => ({ options: arrayOptions }));
  // }

  // handleSearchDeleteOption(option) {
  //   let options = this.state.options;
  //   const index = options.indexOf(option);
  //   if (index > -1) {
  //     options.splice(index, 1);
  //   }
  //   return options;
  // }

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
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
    if (json) {
      const options = JSON.parse(json);
      this.setState(() => ({ options }));
    }
    } catch (error) {
      
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log(json);
    }
  }
  componentWillMount() {
    console.log("componentWillMount");
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
        <BodyOptions
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <FormAddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionComponentApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2> {props.subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Probando defaul"
};
const Actions = props => {
  return (
    <div>
      <BtnDecision hasOtions={props.hasOtions} handlePick={props.handlePick} />
      <BtnRemoveAll handleDeleteOptions={props.handleDeleteOptions} />
    </div>
  );
};

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
    this.setState(() => ({ error: error }));
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

const BtnDecision = props => {
  return (
    <button onClick={props.handlePick} disabled={props.hasOtions}>
      what shoul i do?
    </button>
  );
};

const BtnRemoveAll = props => {
  return <button onClick={props.handleDeleteOptions}> Remove All</button>;
};

const BodyOptions = props => {
  return (
    <div>
      <IsOption options={props.options} />
      <Options
        options={props.options}
        handleDeleteOption={props.handleDeleteOption}
      />
    </div>
  );
};

const Options = props => {
  return (
    <div>
      {props.options.map(option => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  const handleDeleteOption = event => {
    props.handleDeleteOption(props.option);
  };

  return (
    <div>
      {props.option}
      <button onClick={handleDeleteOption}> remove</button>
    </div>
  );
};
const IsOption = props => {
  return (
    <p>
      {props.options.length > 0 ? "Estas son tus opciones" : "No hay opciones"}
    </p>
  );
};

ReactDOM.render(<IndecisionComponentApp />, document.getElementById("app"));
