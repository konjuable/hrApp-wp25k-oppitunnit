// import styles from "./PersonCard.module.css";
// import { useState } from "react"

// import Skill from "./Skill"

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

  return (
    <>
      <dl className="card">
        <dt>
          <h3>Name {props.name}</h3>
        </dt>
        {Recognition(serviceYears)}
        {Probation(serviceYears)}
        <dd>Title: {props.title}</dd>
        <dd>Salary: {props.salary?.toLocaleString()} €</dd>
        <dd>Email: {props.email}</dd>
        <dd>Phone: {props.phone}</dd>
        <dd>Pet: {props.animal}</dd>
        <dd>StartDate: {props.startDate}</dd>
        <dd>Service Years: {getAge(startingTime)} years</dd>
        <dd>Location: {props.location}</dd>
        <dd>Department: {props.department}</dd>
        <dd>Skills: {props.skills}</dd>
        {/* <dd>Skills: {props.skills.join(", ")}</dd> */}
        {/* <dd>Skills: {commaList}</dd> */}
        {/* <Skill skills={skills}/> */}
      </dl>
    </>
  );
};

export default PersonCard;
