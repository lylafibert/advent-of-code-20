import applySeatRules from "./applySeatRules";

export default (seatLayout: string[]): number => {
  let isChanging = true;
  let seats: string[] = seatLayout;
  while (isChanging) {
    const { layout, hasChanged } = applySeatRules(seats);
    seats = layout;
    isChanging = hasChanged;
  }

  return seats.reduce((occupied, currentRow) => {
    return occupied + currentRow.split("#").length - 1;
  }, 0);
};
