import React from 'react'

import Ticket from '../Ticket/Ticket'
import SortingSelection from '../SortingSelection/SortingSelection'

import styles from './TicketList.module.scss'

function TicketList() {
  return (
    <div className={styles.list}>
      <SortingSelection />
      <ul>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button type="button" aria-label="Показать еще 5 билетов!" className={styles.button}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
export default TicketList
