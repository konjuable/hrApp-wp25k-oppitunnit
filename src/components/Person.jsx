import styles from "./Person.module.css"

const Person = ({ name, title, salary, phone, email, animal }) => {
    return (
        <>
            <dl className={styles.card}>
                <dt>
                    <h3>{name}</h3>
                </dt>
                <dd className={styles.cardContent}>
                    <p>Name: {name}</p>
                    <p>Title: {title}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Animal: {animal}</p>
                    <p>Salary: {salary?.toLocaleString()} €</p>
                </dd>
            </dl>
        </>
    )
}

export default Person