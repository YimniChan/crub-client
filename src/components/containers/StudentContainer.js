import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk } from "../../thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);

  }

//add handle events
    handleDelete = (id) => {
      this.props.deleteStudent(id);
      this.props.history.push("/students");
    };

  render() {
    console.log("st-co "+ this.props.student.campus);
    return <StudentView student={this.props.student} />;
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
