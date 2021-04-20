import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
export const firebaseConfig = {
    apiKey: "AIzaSyDM5kRn4vdIWpWMcTKctmW1oHD8KHTrSzE",
    authDomain: "moneyhelper-7f5d4.firebaseapp.com",
    databaseURL: "https://moneyhelper-7f5d4-default-rtdb.firebaseio.com",
    projectId: "moneyhelper-7f5d4",
    storageBucket: "moneyhelper-7f5d4.appspot.com",
    messagingSenderId: "215043418416",
    appId: "1:215043418416:web:1c733e9f673fb1bd1800f5",
    measurementId: "G-Y9MM813CM4"
};





export const getWeeksFromBase = (setWeeks,dispatch)=>{
    const db = firebase.database();
    let resp;
    const weeksRef = db.ref('MyApp/Weeks');
    
     weeksRef.on('value', (items)=>{
        resp = items.val()
        const r2 =setWeeks(resp) 
        dispatch(r2)
    })
}

export const geOnetWeekFromBase = (setWeek,dispatch,weekNumber)=>{
    const db = firebase.database();
    const weekRef = db.ref(`MyApp/Weeks/${weekNumber}`);
    
     weekRef.on('value', (items)=>{
        const resp = items.val()
        const r2 =setWeek(resp) 
            dispatch(r2)
    })
}
export const sendDataToDatabase = (values,dayOfWeek,weekNumber)=>{
    const db = firebase.database();
    Object.keys(values).forEach(key=>{
        if(key === 'selectedDay'){
        }
        else{
            db.ref(`MyApp/Weeks/${weekNumber}/${dayOfWeek}/${key}`).push(Number(values[key]));
        }
    })


}