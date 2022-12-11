import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Ticket from '../Ticket/Ticket'
import SortingSelection from '../SortingSelection/SortingSelection'
import * as actions from '../../actions'

import styles from './TicketList.module.scss'

function TicketList({ ticketDate, countTicket, showMore }) {
  const countTicketOnVisible = countTicket
  let elements = null
  if (ticketDate) {
    const currentDate = ticketDate.slice(0, countTicketOnVisible)

    elements = currentDate.map((item, index) => {
      const { price, route } = item
      const id = index + 1
      return <Ticket price={price} key={id} route={route} />
    })
  }

  return (
    <div className={styles.list}>
      <SortingSelection />
      <ul>{elements}</ul>
      <button type="button" aria-label="Показать еще 5 билетов!" className={styles.button} onClick={showMore}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ticketDate: state.ticketsDate,
  countTicket: state.countTicketVisible,
})
const mapDispatchToProps = (dispatch) => {
  const { showMore } = bindActionCreators(actions, dispatch)

  return {
    showMore,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
