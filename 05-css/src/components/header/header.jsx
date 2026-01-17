import React from 'react'
import styles from './header.module.css'
function header() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Ram</h1>
        <button className={styles.btn}>Click me!</button>
      </div>
    </div>
  )
}

export default header
