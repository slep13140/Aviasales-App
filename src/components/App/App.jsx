import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import mainLogo from '../../image/Logo.png'
import TransferCount from '../TransferCount/TransferCount'
import TicketList from '../TicketList/TicketList'
import { ticketLoad } from '../../actions'

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ticketLoad())
  }, [])
  return (
    <div className={styles['app-container']}>
      <header className={styles.header}>
        <img src={mainLogo} alt="Logo" />
      </header>
      <main className={styles.main}>
        <TransferCount />
        <TicketList />
      </main>
    </div>
  )
}

export default App
