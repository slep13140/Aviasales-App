import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Progress, Space } from 'antd'

import Ticket from '../Ticket'
import SortingSelection from '../SortingSelection'
import * as actions from '../../store/actions'

import styles from './TicketList.module.scss'

function TicketList(props) {
  const { ticketData, countTicket } = props
  const { showMore, load, optimal } = props
  const { transfNo, lowPrice, fastest } = props
  const { transfOne, transfTwo, transfThree } = props
  let percent = ticketData.length / 100
  if (ticketData.length > 9500) {
    percent = 100
  }

  const countTicketOnVisible = countTicket
  let elements = null
  const currentFilters = []
  let currentData = []
  let buttonClass = `${styles.button}`
  let loadCheck = ''
  if (!load) {
    loadCheck = `${styles.load}`
  }

  if (transfNo) {
    currentFilters.push(0)
  }
  if (transfOne) {
    currentFilters.push(1)
  }
  if (transfTwo) {
    currentFilters.push(2)
  }
  if (transfThree) {
    currentFilters.push(3)
  }

  if (currentFilters.length > 3) {
    currentData = [...ticketData]
  } else if (currentFilters.length > 0) {
    currentData = ticketData.filter((item) => {
      const routeThere = item.route[0].stops.length
      const routeBack = item.route[1].stops.length
      if (currentFilters.includes(routeThere) && currentFilters.includes(routeBack)) {
        return item
      }
      return false
    })
  }
  if (lowPrice) {
    currentData.sort((prev, next) => prev.price - next.price)
  } else if (fastest) {
    currentData.sort((prev, next) => {
      const prevDuration = prev.route[0].duration - next.route[0].duration
      return prevDuration
    })
  } else if (optimal) {
    currentData.sort((prev, next) => {
      const prevDuration = prev.route[0].duration + prev.route[1].duration
      const nextDuration = next.route[0].duration + next.route[1].duration
      return prevDuration / prev.price - nextDuration / next.price
    })
  }

  if (ticketData.length > 0) {
    if (currentFilters.length === 0) {
      buttonClass = `${styles.hidden}`
      elements = (
        <div className={styles['filters-no']}>
          <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
        </div>
      )
    } else {
      const ticketsData = currentData.slice(0, countTicketOnVisible)

      elements = ticketsData.map((item, index) => {
        const { price, route } = item
        const id = index + 1
        return <Ticket price={price} key={id} route={route} />
      })
    }
  }

  return (
    <div className={styles.list}>
      <SortingSelection />
      <Space className={loadCheck} wrap>
        <Progress
          percent={percent}
          style={{
            width: 500,
          }}
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        />
      </Space>
      <ul>{elements}</ul>
      <button type="button" aria-label="Показать еще 5 билетов!" className={buttonClass} onClick={showMore}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  ticketData: state.ticketsData,
  countTicket: state.countTicketVisible,
  load: state.loading,
  transfAll: state.countTransferAll,
  transfNo: state.noCountTransfer,
  transfOne: state.countTransfer_1,
  transfTwo: state.countTransfer_2,
  transfThree: state.countTransfer_3,
  lowPrice: state.lowCostRoute,
  fastest: state.fastestRoute,
  optimal: state.optimalRoute,
})
const mapDispatchToProps = (dispatch) => {
  const { showMore } = bindActionCreators(actions, dispatch)

  return {
    showMore,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
