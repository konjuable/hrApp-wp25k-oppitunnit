import { useState, useEffect } from "react";
// import axios from "axios"
import * as styles from "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import employeeData from "./assets/employeeData.json";
// import employeeData from "./db.json"
// import PersonList from "./components/PersonList";
// import AddEmployee from "./components/AddEmployee";

import { _get } from "./hooks/useAxios";

function App() {
  const [employees, setEmployees] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: [],
  });

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await _get("/employees", { headers: {} })
      setEmployees(response.data)
    } catch(error) {
      console.log("Error fetching data: ", error)
    }
  }

  //   axios
  //     .get("http://localhost:3001/employees")
  //     .then(response => {
  //       console.log("promise fullfilled")
  //       setEmployees(response.data)
  //     })
  // }, [])

  console.log("render ", employees.length, "employees")

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        startDate: formData.startDate,
        location: formData.location,
        department: formData.department,
        // skills: formData.skills,
        skills: formData.skills.split(", ").map((skill) => skill.trim()),
      },
    ]);
  }

  return (
    <>
      <Header 
        formData={formData}
        setFormData={setFormData}
        handleClick={handleClick}
        employees={employees}
        setEmployees={setEmployees}
      />
      
      {/* <hr />
      <main>
        <PersonList employees={employees} />
        <AddEmployee
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
      <hr /> */}

      <Footer />
    </>
  );
}

export default App;
