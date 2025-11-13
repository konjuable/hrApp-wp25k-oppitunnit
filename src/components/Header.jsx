import styles from "./Header.module.css"

import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"

import AddEmployee from "./AddEmployee"
import PersonList from "./PersonList"
import About from "./About"

const Header = (
    { formData, setFormData, handleClick, employees, setEmployee }) => {
    return (
        <>
            <header>
                <h1>HR Management System</h1>
                <Router>
                    <nav className="navbar">
                        <Link className={"link-styles"} to="/" >Home</Link>
                        <Link className={"link-styles"} to="/addperson" >Add Person</Link>
                        <Link className={"link-styles"} to="/about" >About</Link>
                    </nav>
                    <Routes>
                        <Route 
                            path="addperson"
                            element={
                                <AddEmployee 
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleClick={handleClick}
                                    setEmployee={setEmployee}
                                    employees={employees}
                                />
                            }
                        />
                        <Route path="about" element={<About />} />
                        <Route path="/" element={<PersonList employees={employees} />} />
                    </Routes>
                </Router>
            </header>
        </>
    )
}

export default Header