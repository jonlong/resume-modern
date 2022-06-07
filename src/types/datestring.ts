type humanMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type zeroToNine = 0 | oneToNine;

type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`;

type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;

export type YYYYMM = `${YYYY}-${MM}`;

export type HumanDate = `${humanMonth} ${YYYY}`;
