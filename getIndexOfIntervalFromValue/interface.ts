export type Interval = {
    lower_bound: number
    upper_bound: number
    lower_ending: IntervalEnding
    upper_ending: IntervalEnding
  }
  
  export enum IntervalEnding {
    OPEN = 'open',
    CLOSED = 'closed',
  }