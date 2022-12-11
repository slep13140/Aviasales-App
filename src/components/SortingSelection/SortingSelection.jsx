import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import styles from './SortingSelection.module.scss'

function SortingSelection(props) {
  const buttonSort = `${styles.buttonSort}`
  const buttonSortActive = `${styles.buttonSortActive}`
  const { lowCostRoute, fastestRoute, optimalRoute } = props
  const { lowCost, fastest, optimal } = props
  const buttonValue = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'].map((item) => item.toUpperCase())
  return (
    <ul className={styles.container}>
      <li>
        <button
          type="button"
          className={lowCostRoute ? buttonSortActive : buttonSort}
          aria-label="Самый дешевый"
          onClick={lowCost}
        >
          {buttonValue[0]}
        </button>
      </li>
      <li>
        <button
          type="button"
          className={fastestRoute ? buttonSortActive : buttonSort}
          aria-label="Самый быстрый"
          onClick={fastest}
        >
          {buttonValue[1]}
        </button>
      </li>
      <li>
        <button
          type="button"
          className={optimalRoute ? buttonSortActive : buttonSort}
          aria-label="Оптимальный"
          onClick={optimal}
        >
          {buttonValue[2]}
        </button>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => ({
  lowCostRoute: state.lowCostRoute,
  fastestRoute: state.fastestRoute,
  optimalRoute: state.optimalRoute,
})

const mapDispatchToProps = (dispatch) => {
  const { lowCost, fastest, optimal } = bindActionCreators(actions, dispatch)

  return {
    lowCost,
    fastest,
    optimal,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortingSelection)
