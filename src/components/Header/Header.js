import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
            signOut(auth);
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="" href="#home">
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle
                    className="order-3 order-md-2"
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse className="order-3 order-md-2" id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-md-center">
                        <Nav.Link>
                            <CustomLink as={Link} className="p-2 text-decoration-none" to="/">
                                Home
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink
                                as={Link}
                                className="p-2 text-decoration-none"
                                to="/services"
                            >
                                Services
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            {" "}
                            <CustomLink
                                as={Link}
                                className="p-2 text-decoration-none"
                                to="/checkout"
                            >
                                Check Out
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink
                                as={Link}
                                className="p-2 text-decoration-none"
                                to="/blogs"
                            >
                                Blogs
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link>
                            <CustomLink
                                as={Link}
                                className="p-2 text-decoration-none"
                                to="/about"
                            >
                                About
                            </CustomLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {
                    user? (               
                    <NavDropdown
                        className="order-md-3"
                        title='Profile'
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item>
                            {
                            user.photoURL? (<img src={user.photoURL} alt='profile pic'/>):
                            (<p>User Login</p>)
                            }
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <Button className="w-100 btn btn-light text-danger" onClick={handleSignOut}>Sign out</Button>
                        </NavDropdown.Item>
                    </NavDropdown>):
                    (<Nav.Link className="order-md-3"><Link className="nav-link" to='/login'>Sign in</Link></Nav.Link>)
                }
            </Container>
        </Navbar>
    );
};

export default Header;
