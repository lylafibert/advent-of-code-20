import { BusInfo } from "../Types";

export default ({ earliestDeparture, busIds }: BusInfo): number => {
  const busTimes = busIds.reduce((busDepartures, busId) => {
    if (busId === 0) return busDepartures;
    let departureTime: number = 0;
    while (departureTime < earliestDeparture) {
      departureTime += busId;
    }
    return [...busDepartures, { id: busId, departureTime }];
  }, []);

  const sortedBusTimes = busTimes.sort(
    (a, b) => a.departureTime - b.departureTime
  );
  return (
    sortedBusTimes[0].id * (sortedBusTimes[0].departureTime - earliestDeparture)
  );
};
