import React from 'react'

import mainLogo from '../../image/Logo.png'
import TransferCount from '../TransferCount/TransferCount'
import TicketList from '../TicketList/TicketList'

import styles from './App.module.scss'

function App() {
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
