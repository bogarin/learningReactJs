import React from "react";
import Actions from "./Actions";
import Header from "./Header";
import BodyOptions from "./BodyOptions";
import FormAddOption from "./FormAddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionRemove !== option)
    }));
  };
  handleclearSelectedOption = () => {
    console.log("estoy aqui ");
    this.setState(() => ({ selectedOption: false }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[randomNum]
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Valor invalido intentas ingresar";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "esta opcion ya existe";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  };
  componentWillMount = () => {
    console.log("componentWillMount");
  };

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Actions
            hasOtions={this.state.options.length <= 0}
            handleDeleteOptions={this.handleDeleteOptions}
            handlePick={this.handlePick}
            selectedOption={this.state.selectedOption}
            handleclearSelectedOption={this.handleclearSelectedOption}
          />
          <div className="widget">
            <BodyOptions
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />

            <FormAddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleclearSelectedOption={this.handleclearSelectedOption}
        />
      </div>
    );
  }
}
