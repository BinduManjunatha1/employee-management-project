import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from "react-redux";

const NavbarComponent = ({searchEmployee}) => {
  
//     return(
//     <div className="col-md-12 bg-dark py-2">
 
//        <nav className="navbar bg-dark navbar-dark">
//         <Link to={"/"} className="navbar-brand ml-5">
//            Employee Management
//         </Link>
//         </nav> 
//    </div>
//      )
// return (
// <section className="border p-10 mb-4 d-flex align-items-center flex-column">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//         <a className="navbar-brand" href="#">Brand</a>
//         <div className="input-group ps-5">
//           <div id="navbar-search-autocomplete" className="form-outline">
//             <input type="search" id="form1" className="form-control" />
//             <label className="form-label" >Search</label>
//           </div>
//           <button type="button" className="btn btn-primary">
//             <i className="fas fa-search"></i>
//           </button>
//         </div>
//       </div>
//     </nav>
// </section>
//   )

const [id, setId] = useState(null);

return(
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand>Employee Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            <Link to='/' className="navbar-brand ml-5">Home</Link> 
            <Link to='/add' className="navbar-brand ml-5">Add Employee</Link>
            <Link to='/list' className="navbar-brand ml-5">List Employee</Link>

          </Nav>

          
          <Form className="d-flex">
            
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
              onChange={(e)=>setId(e.target.value)}
            />
             
            <Link to={`/search/${id}`} className="navbar-brand ml-5">
            <Button variant="secondary"
             onClick={searchEmployee(id)}>Search</Button>
            </Link>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchEmployee: (id) => {
    
    dispatch({ type: "SEARCH_EMPLOYEE", payload: id });
  }
})

export default connect(null,mapDispatchToProps) (NavbarComponent);