import React, { useEffect, useRef, useState } from "react";
import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import {
  SEARCH_BY_FULLNAME,
  SEARCH_BY_EMAIL,
  GET_EMPLOYEES,
  SET_EMPLOYEES,
} from "../../utils/constants";
import API from "../../utils/API";

function EmployeesContainer() {
  const [search, setSearch] = useState();
  const [state, dispatch] = useStoreContext();
  const inputRef = useRef();
  // const removePost = id => {
  //   API.deletePost(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_POST,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };
  function handleSubmit(e) {
    e.preventDefault();
    API.getEmployees()
      .then((res) => {
        dispatch({
          type: SET_EMPLOYEES,
          employees: res.data,
        });
      })
      .catch((err) => console.log(err));
    // dispatch({
    //   type: "search",
    //   name: inputRef.current.value,
    // });
    inputRef.current.value = "";
  }
  // const searchEmployee = () => {
  //   API.getPosts()
  //     .then(results => {
  //       dispatch({
  //         type: GET_EMPLOYEES,
  //         posts: results.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const setEmployee = () => {
    API.getEmployees()
      .then((res) => {
        dispatch({
          type: SET_EMPLOYEES,
          employees: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setEmployee();
  }, []);

  return (
    <div>
      <h1>Search Employees</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          className="form-control"
          ref={inputRef}
          placeholder="search employee by name or email"
        />
      </form>
      <h3 className="mb-5 mt-5">Results: </h3>
      {state.employees.length ? (
        <List>
          {state.employees
            .filter((employee) => {
              if (
                employee.fullName.includes(search) ||
                employee.email.includes(search)
              ) {
                return true;
              }
            //   else return <h3>{console.log("employee not found")} employee not found</h3>
            //   // js string includes
            }).map((employee) => (
              <ListItem key={employee._id}>
                <strong>
                  Employee: {employee.fullName}
                  Employee E-mail: {employee.email}
                </strong>

                {/* <DeleteBtn onClick={() => removePost(post._id)} /> */}
              </ListItem>
            ))}
        </List>
      ) : (
        <h3>you haven't searched yet!</h3>
      )}
      <div className="mt-5"></div>
    </div>
  );
}

export default EmployeesContainer;
