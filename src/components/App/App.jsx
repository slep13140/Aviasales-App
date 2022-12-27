import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TicketList } from '../TicketList'
import { TransferCount } from '../TransferCount'
import { ticketLoad } from '../../store/actions'
import mainLogo from '../../image/Logo.png'

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
