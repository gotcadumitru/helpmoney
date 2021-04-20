import { calcCiubuk } from '../calc.js';
import { getWeeksFromBase, geOnetWeekFromBase, sendDataToDatabase } from '../firebase/firebase.js'

const SET_WEEKS = 'SET_WEEKS',
  SET_WEEK = 'SET_WEEK';
let initialState = {
  weeks: [
  ],
  oneWeek: {
  },
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
}


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEKS:
      return {
        ...state,
        weeks: action.weeks

      }
    case SET_WEEK:
      return {
        ...state,
        oneWeek: { ...action.week }

      }
    default:
      return state;
  }
}

const setWeeks = (weeks) => {
  return {
    type: SET_WEEKS,
    weeks: weeks
  }
}
const setOneWeek = (week) => {
  return {
    type: SET_WEEK,
    week: week
  }
}
export const getWeeks = () => (dispatch) => {
  getWeeksFromBase(setWeeks, dispatch)
}
export const getOneWeek = (weekNumber) => (dispatch) => {
  geOnetWeekFromBase(setOneWeek, dispatch, weekNumber)
}

export const sendData = (values) => (dispatch) => {
  const day = new Date(values.selectedDay);
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day);

  const firstDayOfYear = new Date(day.getFullYear(), 0, 4);
  const pastDaysOfYear = (day - firstDayOfYear) / 86400000;
  const weekNumber = Math.ceil((pastDaysOfYear) / 7);
  const start = Number(values.startValues)-Number(values.startMoneyInApp)
  const end = Number(values.endValues)-Number(values.endMoneyInApp)

  sendDataToDatabase({
      ...values, 
      startValues:start,
      endValues: end,
      ciubuc: calcCiubuk(start,end,values.otherValues,values.otherValuesPFA,values.gasValues),
    },dayOfWeek,weekNumber)
  
}


export default appReducer;