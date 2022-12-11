import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import styles from './TransferCount.module.scss'

function TransferCount({
  transferAllCount,
  noTransferCount,
  oneTransferCount,
  twoTransferCount,
  threeTransferCount,
  allTransfer,
  noTransfer,
  oneTransfer,
  twoTransfer,
  threeTransfer,
}) {
  const check = `${styles.checkbox}`
  const checkActive = `${styles.active}`
  const title = 'Количество пересадок'
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title.toUpperCase()}</div>
      <label htmlFor="all">
        <input type="checkbox" id="all" onChange={allTransfer} />
        <span className={transferAllCount ? checkActive : check} aria-hidden="true" />
        <span className={styles.value}>Все</span>
      </label>
      <label htmlFor="no-transfer">
        <input type="checkbox" id="no-transfer" onChange={noTransfer} />
        <span className={noTransferCount ? checkActive : check} aria-hidden="true" />
        <span className={styles.value}>Без пересадок</span>
      </label>
      <label htmlFor="transfer_1">
        <input type="checkbox" id="transfer_1" onChange={oneTransfer} />
        <span className={oneTransferCount ? checkActive : check} aria-hidden="true" />
        <span className={styles.value}>1 пересадка</span>
      </label>
      <label htmlFor="transfer_2">
        <input type="checkbox" id="transfer_2" onChange={twoTransfer} />
        <span className={twoTransferCount ? checkActive : check} aria-hidden="true" />
        <span className={styles.value}>2 пересадки</span>
      </label>
      <label htmlFor="transfer_3">
        <input type="checkbox" id="transfer_3" onChange={threeTransfer} />
        <span className={threeTransferCount ? checkActive : check} aria-hidden="true" />
        <span className={styles.value}>3 пересадки</span>
      </label>
    </div>
  )
}

const mapStateToProps = (state) => ({
  transferAllCount: state.countTransferAll,
  noTransferCount: state.noCountTransfer,
  oneTransferCount: state.countTransfer_1,
  twoTransferCount: state.countTransfer_2,
  threeTransferCount: state.countTransfer_3,
})

const mapDispatchToProps = (dispatch) => {
  const { allTransfer, noTransfer, oneTransfer } = bindActionCreators(actions, dispatch)
  const { twoTransfer, threeTransfer } = bindActionCreators(actions, dispatch)
  return {
    allTransfer,
    noTransfer,
    oneTransfer,
    twoTransfer,
    threeTransfer,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransferCount)
