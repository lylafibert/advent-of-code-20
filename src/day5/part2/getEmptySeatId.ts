import getSeatId from '../part1/getSeatId'
export default (seats: string[]):number => {
  const seatIds:number[] = seats.map(seat => getSeatId(seat))
  let emptySeatId:number
  for(let i = 0; !emptySeatId; i++) {
    const seatId = seatIds[i]
    const rightSeatIsEmpty = !seatIds.includes(seatId + 1) && seatIds.includes(seatId +2 )
    const leftSeatIsEmpty = !seatIds.includes(seatId - 1) && seatIds.includes(seatId - 2 )
    if(rightSeatIsEmpty) return seatId + 1
    if(leftSeatIsEmpty) return seatId -1
  }
}