// import styles from "./PersonCard.module.css";
import { useState } from "react"
import axios from "axios"

import { _patch } from "../hooks/useAxios";

const PersonCard = (props) => {

  // const [skillList, setSkillList] = useState(skills)

  // tallennetaan array skills skillList muuttujaan, käytään skillList array läpi ja lisätään jokaisen skillin väliin pilkku ja tallennetaan tämä muuttujaan commaList
  // console.log(skillList,  skillList.length)
  // let commaList = skillList.join(", ")
  // console.log("commaList " + commaList)

  let startingTime = props.startDate;

  // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  const getAge = (startingTime) =>
    Math.floor((new Date() - new Date(startingTime).getTime()) / 3.15576e10);

  let serviceYears = getAge(startingTime);
  console.log(serviceYears);



  const Recognition = (props) => {
    if (props % 5 === 0 && props != 0) {
      return (
        <>
          <dd>Recognition: 🎉 Schedule recognition meeting.</dd>
        </>
      );
    }
  };

  const Probation = (props) => {
    if (props < 0.5) {
      return (
        <>
          <dd>Probation: 🔔 Schedule probation review.</dd>
        </>
      );
    }
  };

  // Kenttien arvojen muokkaaminen
  const salary = props.salary
  const location = props.location
  const department = props.department
  const skills = props.skills
  const id = props.id

  const [isEditing, setIsEditing] = useState(false)
  const [person, setPerson] = useState({ salary, location, department, skills })

  const update = (url = "http://localhost:3001", body = {}, headers = {}) =>
    _patch(url, body, { headers })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPerson((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleEdit = () => {
    update (`http://localhost:3001/employees/${id}`, person)
  }

  const renderEditableField = (value, name) => {
    const capitalizeWords = (text) =>
      text
        .toString()
        .replace(
          /\w\S*/g,
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
      const displayValue = value ? capitalizeWords(value) : "N/A"
      const displayName = name ? capitalizeWords(name) : "N/A"

      return isEditing ? (
        <input value={value || ""} name={name} onChange={handleInputChange} />
      ) : ( <dd>{displayName}: {displayValue}</dd> )
  }

  return (
    <>
      <dl className="card">
        <dt>
          <h3>Name {props.name}</h3>
        </dt>
        {Recognition(serviceYears)}
        {Probation(serviceYears)}
        <dd>Title: {props.title}</dd>
        <dd>Email: {props.email}</dd>
        <dd>Phone: {props.phone}</dd>
        <dd>Pet: {props.animal}</dd>
        <dd>StartDate: {props.startDate}</dd>
        <dd>Service Years: {getAge(startingTime)} years</dd>
        {renderEditableField(person.salary, "salary")}
        {renderEditableField(person.location, "location")}
        {renderEditableField(person.department, "department")}
        {renderEditableField(person.skills, "skills")}
        {/* <dd>Salary: {props.salary?.toLocaleString()} €</dd>
        <dd>Location: {props.location}</dd>
        <dd>Department: {props.department}</dd>
        <dd>Skills: {props.skills}</dd> */}
        {/* <dd>Skills: {props.skills.join(", ")}</dd> */}
        {/* <dd>Skills: {commaList}</dd> */}
        {/* <Skill skills={skills}/> */}
        <button
          onClick={() =>{
            if (isEditing) handleEdit()
            setIsEditing((prev) => !prev)
          }}
          >
          {isEditing ? "Save" : "Edit"}
        </button>
      </dl>
    </>
  );
};

export default PersonCard;
