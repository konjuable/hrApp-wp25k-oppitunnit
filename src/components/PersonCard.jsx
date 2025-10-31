import styles from "./PersonCard.module.css"

import Skill from "./Skill"

const PersonCard = ({ name, title, salary, phone, email, animal, startDate, location, department, skills }) => {
    let startingTime = startDate

// https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
    const getAge = (startingTime) => 
        Math.floor((new Date() - new Date(startingTime).getTime()) / 3.15576e+10)


    return (
        <>
            <dl className={styles.card}>
                <dt>
                    <h3>{name}</h3>
                </dt>
                <dd className={styles.cardContent}>
                    <p>Name: {name}</p>
                    <p>Title: {title}</p>
                    <p>Salary: {salary?.toLocaleString()} €</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Pet: {animal}</p>
                    <p>StartDate: {startDate}</p>

                    <p>Service Years: {getAge(startingTime)} years</p>

                    <p>Location: {location}</p>
                    <p>Department: {department}</p>
                    {/* <p>Skills: {skills}</p> */}
                    <Skill skills={skills}/>
                </dd>
            </dl>
        </>
    )
}

export default PersonCard