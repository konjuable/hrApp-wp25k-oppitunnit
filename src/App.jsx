import * as styles from "./index.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import employeeData from "./assets/employeeData.json"
import PersonList from "./components/PersonList"

const App = () => {

  return (
    <>
      <Header />
      <hr />
      <main>
        <h2 className={styles.h1}></h2>
        <PersonList employees={employeeData} />
      </main>
      <hr />
      <Footer />
    </>
  )
}

export default App
