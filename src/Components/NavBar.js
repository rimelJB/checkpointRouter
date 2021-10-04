import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";


export default function NavBar({ nameSearch, NameSearch, ratingSearch, RatingSearch}){ 
  const handleChange = (event) => NameSearch(event.target.value);
  const ratingChanged = (e) => {RatingSearch(e)}
   
    
      const refreshPage = ()=>{
        window.location.reload();
     }
  
    return (

    <Navbar  expand="lg" sticky="top">
              
                <Navbar.Brand href="#"  className="nav-bar-brand-styl">Movie app</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '50px', fontSize:'20px', marginRight:'50px' }}
                        navbarScroll
                      >
                      
                         
                          
                       </Nav>
                               <div style={{width:'700px' ,display:'flex', justifyContent:'space-around'}}>

                                           <Form className="d-flex">
                                            <FormControl
                                              type="search"
                                              placeholder="Place a Movie Title"
                                              className="mr-2"
                                              aria-label="Search"
                                              onChange={handleChange}
                                              style={{width :'250px'}}
                                              value={nameSearch}
                                            />
                                                
                                            </Form>
                                           <div className='rating-by-stars' style={{marginLeft:'50px', width:'500px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                                                 <span><i>Search by rating</i></span>
                                           
                                                   <ReactStars
                                              
                                                     count={5}
                                                           onChange={ratingChanged}
                                                           size={20}
                                                           isHalf={false}
                                                           emptyIcon={<i className="far fa-star"></i>}
                                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                           fullIcon={<i className="fa fa-star"></i>}
                                                           activeColor="#ffd700"
                                                           value={ratingSearch}
                                               
    
                                                  /> 
                                           </div>
                                              <Button  variant="outline-secondary" style ={{marginLeft:'20px'}} onClick={refreshPage}>Reset</Button>
                                           
                                </div>
                    </Navbar.Collapse>
                                
  
    </Navbar>

        

    )

}