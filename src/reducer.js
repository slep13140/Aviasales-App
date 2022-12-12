const initialState = {
  countTransferAll: false,
  noCountTransfer: false,
  countTransfer_1: false,
  countTransfer_2: false,
  countTransfer_3: false,
  lowCostRoute: true,
  fastestRoute: false,
  optimalRoute: false,
  countTicketVisible: 5,
  loading: true,
  error: false,
  ticketsData: [],
}
const reducer = (state, action) => {
  if (state === undefined) {
    return initialState
  }

  switch (action.type) {
    case 'ALL':
      if (!state.countTransferAll) {
        return {
          ...state,
          countTransferAll: true,
          noCountTransfer: true,
          countTransfer_1: true,
          countTransfer_2: true,
          countTransfer_3: true,
        }
      }
      return {
        ...state,
        countTransferAll: false,
        noCountTransfer: false,
        countTransfer_1: false,
        countTransfer_2: false,
        countTransfer_3: false,
      }

    case 'NO_TRANSFER':
      if (state.countTransferAll) {
        return {
          ...state,
          countTransferAll: false,
          noCountTransfer: false,
          countTransfer_1: true,
          countTransfer_2: true,
          countTransfer_3: true,
        }
      }
      if (!state.countTransferAll && !state.noCountTransfer && state.countTransfer_1) {
        if (state.countTransfer_2 && state.countTransfer_3) {
          return {
            ...state,
            countTransferAll: true,
            noCountTransfer: true,
            countTransfer_1: true,
            countTransfer_2: true,
            countTransfer_3: true,
          }
        }
      }
      return { ...state, noCountTransfer: !state.noCountTransfer }
    case 'TRANSFER_1':
      if (state.countTransferAll) {
        return {
          ...state,
          countTransferAll: false,
          noCountTransfer: true,
          countTransfer_1: false,
          countTransfer_2: true,
          countTransfer_3: true,
        }
      }
      if (!state.countTransferAll && state.noCountTransfer && !state.countTransfer_1) {
        if (state.countTransfer_2 && state.countTransfer_3) {
          return {
            ...state,
            countTransferAll: true,
            noCountTransfer: true,
            countTransfer_1: true,
            countTransfer_2: true,
            countTransfer_3: true,
          }
        }
      }
      return { ...state, countTransfer_1: !state.countTransfer_1 }
    case 'TRANSFER_2':
      if (state.countTransferAll) {
        return {
          ...state,
          countTransferAll: false,
          noCountTransfer: true,
          countTransfer_1: true,
          countTransfer_2: false,
          countTransfer_3: true,
        }
      }
      if (!state.countTransferAll && state.noCountTransfer && state.countTransfer_1) {
        if (!state.countTransfer_2 && state.countTransfer_3) {
          return {
            ...state,
            countTransferAll: true,
            noCountTransfer: true,
            countTransfer_1: true,
            countTransfer_2: true,
            countTransfer_3: true,
          }
        }
      }
      return { ...state, countTransfer_2: !state.countTransfer_2 }
    case 'TRANSFER_3':
      if (state.countTransferAll) {
        return {
          ...state,
          countTransferAll: false,
          noCountTransfer: true,
          countTransfer_1: true,
          countTransfer_2: true,
          countTransfer_3: false,
        }
      }
      if (!state.countTransferAll && state.noCountTransfer && state.countTransfer_1) {
        if (state.countTransfer_2 && !state.countTransfer_3) {
          return {
            ...state,
            countTransferAll: true,
            noCountTransfer: true,
            countTransfer_1: true,
            countTransfer_2: true,
            countTransfer_3: true,
          }
        }
      }
      return { ...state, countTransfer_3: !state.countTransfer_3 }
    case 'LOW_COST_ROUTE':
      if (!state.lowCostRoute) {
        return {
          ...state,
          lowCostRoute: true,
          fastestRoute: false,
          optimalRoute: false,
        }
      }
      return { ...state }
    case 'FASTEST_ROUTE':
      if (!state.fastestRoute) {
        return {
          ...state,
          lowCostRoute: false,
          fastestRoute: true,
          optimalRoute: false,
        }
      }
      return { ...state }
    case 'OPTIMAL_ROUTE':
      if (!state.optimalRoute) {
        return {
          ...state,
          lowCostRoute: false,
          fastestRoute: false,
          optimalRoute: true,
        }
      }
      return { ...state }
    case 'SHOW_MORE_TICKETS':
      return { ...state, countTicketVisible: state.countTicketVisible + 5 }
    case 'TICKET_LOAD': {
      const tickets = action.data.map((item) => ({
        price: item.price,
        route: item.segments,
      }))
      const newTickets = [...state.ticketsData, ...tickets]
      return {
        ...state,
        error: false,
        ticketsData: newTickets,
      }
    }
    case 'TICKET_NO_LOAD':
      return { ...state, error: true }
    case 'TICKET_LOADED':
      return { ...state, loading: false }

    default:
      return state
  }
}
export default reducer
