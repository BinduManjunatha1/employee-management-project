import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ListEmployees = ({ employees,deleteEmployee }) => {
    return (
      <div className="container">
        <div className="row d-flex flex-column">
          <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
            Add employee
          </Link>
          <div className="col-md-10 mx-auto my-4">
            <table className="table table-hover">
              <thead className="table-header bg-dark text-white">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((employee, id) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => deleteEmployee(employee.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th>No employees found</th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    employees: state.employees,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    deleteEmployee: (id) => {
      dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    },
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(ListEmployees);