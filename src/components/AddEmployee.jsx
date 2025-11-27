// import axios from "axios"

import { _post } from "../hooks/useAxios"

const AddEmployee = ({ formData, setFormData, handleClick, setEmployees, employees }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState, 
            [name]:
            name === "skills"
                ? value.split(", ").map((skill) => skill.trim())
                : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            _post("/api/employees", formData)
            .then(response => {
                setEmployees(employees.concat(response.data))
            })
        } catch(error) {
            console.log("Error adding data: ", error)
        }

        // axios
        //  .post("http://localhost:3001/employees", formData)
        //  .then(response => {
        //     setEmployees(employees.concat(response.data))
        //  })

        handleClick();
        setFormData({
            name: "",
            title: "",
            phone: "",
            email: "",
            animal: "",
            startDate: "",
            salary: "",
            location: "",
            department: "",
            skills: [],
        }) // optimal resetting of the form
    }

    return (
        <>
            <section className="container">
                <h2>Add new Person</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        className="input"
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="title">Title</label>
                    <input 
                        className="input"
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <label htmlFor="phone">Phone</label>
                    <input 
                        className="input"
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        className="input"
                        id="email"
                        name="email"
                        type="type"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="animal">Pet</label>
                    <input 
                        className="input"
                        id="animal"
                        name="animal"
                        type="text"
                        autoComplete="animal"
                        value={formData.animal}
                        onChange={handleChange}
                    />

                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        className="input"
                        id="startDate"
                        name="startDate"
                        type="text"
                        autoComplete="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="salary">Salary</label>
                    <input 
                        className="input"
                        id="salary"
                        name="salary"
                        type="number"
                        autoComplete="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />

                    <label htmlFor="location">Location</label>
                    <input 
                        className="input"
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <label htmlFor="department">Department</label>
                    <input 
                        className="input"
                        id="department"
                        name="department"
                        type="text"
                        autoComplete="department"
                        value={formData.department}
                        onChange={handleChange}
                    />

                    <label htmlFor="skills">Skills</label>
                    <input 
                        className="input"
                        id="skills"
                        name="skills"
                        type="array"
                        autoComplete="skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />

                    <button type="submit">Add Employee</button>
                    <button
                        type="reset"
                        onClick={() => {
                            setFormData({
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
                            })
                        }}
                        >Reset Form
                    </button>
                </form>

                <p>Your name is: {formData.name}</p>
                <p>Your title is: {formData.title}</p>
                <p>Your salary is: {formData.salary}</p>
            </section>
        </>
    )
}

export default AddEmployee