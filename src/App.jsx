import React, { Component } from "react";

// Controlled Component
class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Controlled Component</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}

// Uncontrolled Component
class UncontrolledInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = () => {
    alert(`Input value: ${this.inputRef.current.value}`);
  };

  render() {
    return (
      <div>
        <h2>Uncontrolled Component</h2>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

// Form Validation
class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", error: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({ error: "Name is required" });
    } else {
      this.setState({ error: "" });
      alert("Form submitted");
    }
  };

  render() {
    return (
      <div>
        <h2>Form Validation</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
        </form>
      </div>
    );
  }
}

// Handling Multiple Inputs
class MultipleInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", error: "" };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    if (name === "" || email === "") {
      this.setState({ error: "All fields are required" });
    } else {
      this.setState({ error: "" });
      alert("Form submitted");
    }
  };

  render() {
    return (
      <div>
        <h2>Handling Multiple Inputs</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
        </form>
      </div>
    );
  }
}

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Handling Forms in React</h1>
      <ControlledInput />
      <UncontrolledInput />
      <SimpleForm />
      <MultipleInputForm />
    </div>
  );
};

export default App;
