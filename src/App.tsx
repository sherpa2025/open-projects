import { useState } from 'react'
import styles from './app.module.css'

function App() {
  const [, setEmail] = useState('')
  // type inference
  const [password, setPassword] = useState('')

  // type annotation (: string | number)
  let age: string | number

  // Test rebase
  age = 100

  age = '90'
  age = '80'

  // age = [1,2,3]

  // Initial run -> render
  // Again run -> re-render

  // statement
  // if(email) {
  //   ''
  // } else {
  //   styles.errorBorder
  // }

  // expression
  // ternary operator
  // email ? styles.errorBorder : ''

  return (
    <div className={styles.container}>
      <div>{age}</div>
      <article className={styles.card}>
        <img src="/icons/authentication.png" alt="" className={styles.img} />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" type="email" />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className={`${styles.input} ${password.length >= 8 ? '' : styles.errorBorder}`} id="password" type="password" />
            {password.length >= 8 ? '' : <small className={styles.error}>Your password is less than 8 characters</small>}
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  )
}

export default App
