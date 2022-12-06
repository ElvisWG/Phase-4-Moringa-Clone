import React from "react";

function FeedBack() {
  const students = [
    {
      name: "Jane Doe",
      question: "What is npm",
      Answer: "10",
    },

    {
      name: "Jane Doe",
      question: "What is npm",
      Answer: "10",
    },
  ];
  return (
    <table className="table table-bordered table-dark table table-hover ">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="text" id="selectAll" />
              <label for="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Qustions</th>
          <th>Answers</th>
          <th>FeedBack</th>

          {/* <th>Bus</th> */}
          {/* <th>Edit Details</th> */}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>
              <span className="custom-checkbox">
                <input type="text" id="checkbox1" name="options[]" value="1" />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>{student.name}</td>
            <td>{student.question}</td>
            <td>{student.Answer}</td>
            <td><div class="div"><textarea></textarea></div></td>
            <td style={{ color: "pink" }}>Submit</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FeedBack;
