import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addStudent, fetchStudents} from "../actions/studentActions";

class App extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  };

  render() {
    // This will have access to the store object
    // console.log(this.props);
    const {addStudent, fetchStudents} = this.props;
    const {students} = this.props.store;

    return (
      <div className="App">
        <p className="App-intro">Hello World </p>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.firstName}</li>
          ))}
        </ul>

        <input value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => {
          addStudent(this.state.value);
        }}>Add
        </button>

        <button onClick={fetchStudents}>Fetch Students</button>
      </div>
    );
  }
}

const mapStateToPros = (store) => {
  return {store};
};

export default connect(mapStateToPros, {addStudent, fetchStudents})(App);
