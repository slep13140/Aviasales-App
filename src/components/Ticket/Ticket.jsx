import React from 'react'

import s7Logo from '../../image/s7Logo.png'

import styles from './Ticket.module.scss'

function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.title}>
        <div>13 400 Р </div>
        <img src={s7Logo} alt="Logo" />
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>MOW – HKT</th>
              <th>В пути</th>
              <th>2 ПЕресадки</th>
            </tr>
            <tr>
              <td>10:45 – 08:00</td>
              <td>21ч 15м</td>
              <td>HKG, JNB</td>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>MOW – HKT</th>
              <th>В пути</th>
              <th>1 пересадка</th>
            </tr>
            <tr>
              <td>11:20 – 00:50</td>
              <td>13ч 30м</td>
              <td>HKG</td>
            </tr>
          </thead>
        </table>
      </div>
    </li>
  )
}

export default Ticket
