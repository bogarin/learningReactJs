class IndecisionComponentApp extends React.Component {
  render() {
    const title = "Insercision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["One", "Two", "three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions />
        <Options options={options} />
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
        <BtnDecision />
        <BtnRemoveAll />
      </div>
    );
  }
}

class FormAddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <InputAddOption />
          <BtnAddOption />
        </form>
      </div>
    );
  }
}

class InputAddOption extends React.Component {
  render() {
    return <input type="text" name="option" />;
  }
}
class BtnDecision extends React.Component {
  render() {
    return <button> what shoul i do?</button>;
  }
}

class BtnRemoveAll extends React.Component {
  render() {
    return <button> Remove All</button>;
  }
}
class BtnAddOption extends React.Component {
  render() {
    return <button>Add Option</button>;
  }
}

class Options extends React.Component {
  render() {
    let length = this.props.options.length;
    let listOptions = this.props.options;
    console.log("donde truenas "+listOptions);
  }
}

ReactDOM.render(<IndecisionComponentApp />, document.getElementById("app"));
