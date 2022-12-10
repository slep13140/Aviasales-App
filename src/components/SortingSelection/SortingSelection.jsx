import React from 'react'

import styles from './SortingSelection.module.scss'

function SortingSelection() {
  //   const active = `${styles.container} ${styles.active}`
  return (
    <ul className={styles.container}>
      <li>
        <button type="button" className={styles.active} aria-label="Самый дешевый">
          Самый дешевый
        </button>
      </li>
      <li>
        <button type="button" aria-label="Самый быстрый">
          Самый быстрый
        </button>
      </li>
      <li>
        <button type="button" aria-label="Оптимальный">
          Оптимальный
        </button>
      </li>
    </ul>
  )
}
export default SortingSelection
