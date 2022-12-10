import React from 'react'

import styles from './TransferCount.module.scss'

function TransferCount() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Количество пересадок</div>
      <label htmlFor="All">
        <input type="checkbox" id="All" onChange={(s) => console.log(s.target.id)} />
        <span className={styles.checkbox} aria-hidden="true" />
        <span className={styles.value}>Все</span>
      </label>
      <label htmlFor="no-transfer">
        <input type="checkbox" id="no-transfer" onChange={(s) => console.log(s.target.id)} />
        <span className={styles.active} aria-hidden="true" />
        <span className={styles.value}>Без пересадок</span>
      </label>
      <label htmlFor="transfer_1">
        <input type="checkbox" id="transfer_1" onChange={(s) => console.log(s.target.id)} />
        <span className={styles.active} aria-hidden="true" />
        <span className={styles.value}>1 пересадка</span>
      </label>
      <label htmlFor="transfer_2">
        <input type="checkbox" id="transfer_2" onChange={(s) => console.log(s.target.id)} />
        <span className={styles.active} aria-hidden="true" />
        <span className={styles.value}>2 пересадки</span>
      </label>
      <label htmlFor="transfer_3">
        <input type="checkbox" id="transfer_3" onChange={(s) => console.log(s.target.id)} />
        <span className={styles.checkbox} aria-hidden="true" />
        <span className={styles.value}>3 пересадки</span>
      </label>
    </div>
  )
}

export default TransferCount
