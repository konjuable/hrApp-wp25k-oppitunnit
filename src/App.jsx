import { useState } from "react";
import * as styles from "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import employeeData from "./assets/employeeData.json";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [employees, setEmployees] = useState(employeeData)
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
    skills: "",
  });

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
      <Header />
      <hr />
      <main>
        <PersonList employees={employees} />
        <AddEmployee
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
      <hr />
      <Footer />
    </>
  );
}

export default App;
