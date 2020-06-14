import React from "react";

const StudentView = (props) => {
  // //display college 
  // let studentDisplay;
  // if (props.student.students) {
  //   studentDisplay = (
  //     <div>
  //       <p>{props.campus.students.length} Students</p>
  //       {props.campus.students.map((student) => (
  //         <div key={student.id}>{student.firstName}</div>
  //       ))}
  //     </div>
  //   );
  // } else {
  //   studentDisplay = <p>There are no students enrolled</p>;
  // }

  //  {studentDisplay/*drowmeun for*/ } in return

  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.name} />
      <h3>{props.student.firstname},{props.student.lastname}</h3>
      <p>{props.student.email}</p>
      <p>{props.student.gpa}</p>

      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;