import React, { useState } from "react";
import { set } from "react-hook-form";

function StudentList({ onSearching }) {
  const students = [
    {
      name: "Jane Doe",
      email: "jane@gmail.com",
      score: "10",
      answer: "Ruby gem",
    },

    {
      name: "Jane Doe",
      email: "jane@gmail.com",
      score: "10",
      answer: "Ruby gem",
    },
  ];

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearching(search);
  }
  return (
    <div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
            <input
              type="search"
              value={search}
              onChange={handleChange}
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            ></input>
            <span
              class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              {/* <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg> */}
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Scores
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Answers
                    </th>

                    {/* <th>Bus</th> */}
                    {/* <th>Edit Details</th> */}
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} class="bg-white border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.email}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.score}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {student.answer}
                      </td>
                      {/* <td>{booking.customer.bus}</td> */}
                      {/* <td  onClick={handleClick}style={{ color: "pink" }}>Edit</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
