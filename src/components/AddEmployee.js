import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddEmployee = ({ employees, addemployee ,deleteemployee}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkemployeeEmailExists = employees.filter((employee) =>
      employee.email === email ? employee : null
    );
    const checkemployeePhoneExists = employees.filter((employee) =>
      employee.phone === phone ? employee : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkemployeeEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkemployeePhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: employees.length > 0 ? employees[employees.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };
    
    addemployee(data);
    toast.success("Employee added successfully!!");
    setEmail('');
    setName('')
    setPhone('')
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Employee</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Employee"
              />
            </div>
          </form>
        </div>
      </div>
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
                      <td>{id + 1}</td>
                      <td>{employees.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                       <td>
                        
                        <button
                          type="button"
                          onClick={() => deleteemployee(employee.id)}
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
    

    /*
    
    */
  );
};

const mapStateToProps = (state) => ({
  employees: state,
});

const mapDispatchToProps = (dispatch) => ({
  addemployee: (data) => {
    dispatch({ type: "ADD_EMPLOYEE", payload: data });
  }, 
  deleteemployee: (id) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
