import React from 'react'
import { add } from 'date-fns'

import s7Logo from '../../image/s7Logo.png'

import styles from './Ticket.module.scss'

function Ticket({ price, route }) {
  let currentPrice = `${price} P`
  if (price > 999) {
    currentPrice = `${String(price).slice(0, -3)} ${String(price).slice(-3)} P`
  }
  const checkTime = (i) => {
    let t = i
    if (i < 10) {
      t = `0${i}`
    }
    return t
  }
  const onWay = 'В пути'
  const currentRoute = route.map((item) => {
    const routes = `${item.origin} - ${item.destination}`
    const timeThereStart = new Date(item.date)
    const thereHoursStart = checkTime(timeThereStart.getHours())
    const thereMinutesStart = checkTime(timeThereStart.getMinutes())
    const timeThereEnd = add(timeThereStart, { minutes: item.duration })
    const thereHoursEnd = checkTime(timeThereEnd.getHours())
    const thereMinutesEnd = checkTime(timeThereEnd.getMinutes())
    const timeThere = `${thereHoursStart}:${thereMinutesStart} - ${thereHoursEnd}:${thereMinutesEnd}`
    const timeHours = item.duration % 60
    const timeMin = Math.floor(item.duration / 60)
    const routesDuration = `${checkTime(timeHours)}ч ${checkTime(timeMin)}м`
    let countTransfer = 'Без пересадок'
    let transferName = []
    if (item.stops.length === 1) {
      countTransfer = `${item.stops.length} пересадка`
      transferName = item.stops
    }
    if (item.stops.length > 1) {
      countTransfer = `${item.stops.length} пересадки`
      transferName = item.stops
    }
    return {
      route: routes,
      times: timeThere,
      duration: routesDuration,
      counts: countTransfer.toUpperCase(),
      transfers: transferName.join(','),
    }
  })

  return (
    <li className={styles.ticket}>
      <div className={styles.title}>
        <div>{currentPrice}</div>
        <img src={s7Logo} alt="Logo" />
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{currentRoute[0].route}</th>
              <th>{onWay.toUpperCase()}</th>
              <th>{currentRoute[0].counts}</th>
            </tr>
            <tr>
              <td>{currentRoute[0].times}</td>
              <td>{currentRoute[0].duration}</td>
              <td>{currentRoute[0].transfers}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{currentRoute[1].route}</th>
              <th>{onWay.toUpperCase()}</th>
              <th>{currentRoute[1].counts}</th>
            </tr>
            <tr>
              <td>{currentRoute[1].times}</td>
              <td>{currentRoute[1].duration}</td>
              <td>{currentRoute[1].transfers}</td>
            </tr>
          </thead>
        </table>
      </div>
    </li>
  )
}

export default Ticket
