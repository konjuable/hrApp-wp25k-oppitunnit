import * as styles from "./index.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Person from "./components/Person"

const App = () => {

  const samplePerson = {
    name: "John Smith",
    title: "Senior Software Engineer",
    salary: 7000,
    phone: "0451234567",
    email: "john.smith@company.com",
    animal: "Golden Retriever",
  }


  return (
    <>
      <Header />
      <hr />
      <main>
        <h2 className={styles.h1}></h2>
        <Person {...samplePerson} />
      </main>
      <hr />
      <Footer />
    </>
  )
}

export default App
