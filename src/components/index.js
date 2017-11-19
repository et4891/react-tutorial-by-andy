import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addStudent} from "../actions/studentActions";

class App extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  };

  render() {
    // This will have access to the store object
    // console.log(this.props.store);
    // console.log(this.props.store);
    const {addStudent} = this.props;
    const {students} = this.props.store;
    console.log(students);

    return (
      <div className="App">
        <p className="App-intro">Hello World </p>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name}</li>
          ))}
        </ul>

        <input value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => {
          addStudent(this.state.value);
        }}>Add
        </button>
      </div>
    );
  }
}

const mapStateToPros = (store) => {
  return {store};
};

export default connect(mapStateToPros, {addStudent})(App);
