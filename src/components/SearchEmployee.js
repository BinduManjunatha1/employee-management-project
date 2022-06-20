import React from 'react'
import { connect } from 'react-redux';

const SearchEmployee = ({employees}) => {
    
  return (
    <div className="container">
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
                       
                    </tr>
                  ))
                ): (
                  <tr>
                    <th>No employee found</th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
  )
}
const mapStateToProps = (state) => ({
    employees: state.serachedEmployee,
  });

export default connect(mapStateToProps)(SearchEmployee)