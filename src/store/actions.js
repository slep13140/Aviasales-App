export function allTransfer() {
  return { type: 'ALL' }
}
export function noTransfer() {
  return { type: 'NO_TRANSFER' }
}
export function oneTransfer() {
  return { type: 'TRANSFER_1' }
}
export function twoTransfer() {
  return { type: 'TRANSFER_2' }
}
export function threeTransfer() {
  return { type: 'TRANSFER_3' }
}
export function lowCost() {
  return { type: 'LOW_COST_ROUTE' }
}
export function fastest() {
  return { type: 'FASTEST_ROUTE' }
}
export function optimal() {
  return { type: 'OPTIMAL_ROUTE' }
}
export function showMore() {
  return { type: 'SHOW_MORE_TICKETS' }
}
export function ticketLoad() {
  return async (dispatch) => {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const jsonSearch = await response.json()
    async function cb() {
      const respTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${jsonSearch.searchId}`)
      if (respTickets.status === 502) {
        await cb()
      } else if (respTickets.status !== 200) {
        dispatch({
          type: 'TICKET_NO_LOAD',
        })
        await cb()
      }
      const jsonData = await respTickets.json()
      dispatch({
        type: 'TICKET_LOAD',
        data: jsonData.tickets,
      })
      if (!jsonData.stop) {
        cb()
      } else {
        dispatch({
          type: 'TICKET_LOADED',
        })
      }
    }
    cb()
  }
}
