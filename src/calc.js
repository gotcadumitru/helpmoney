export const calcCiubuk = (start=0,end=0, chelt=0, cheltPFA=0,benz=0)=>{
    return Number(end)-Number(start)+Number(chelt)+Number(cheltPFA)+Number(benz); 
}

export const calcSaptamanal = (value,week)=>{
    let totSum = 0
    Object.keys(week).forEach(item=>{
        totSum += Object.values(week[item][value])[0];
    })
    return totSum
}
export const calcCheltSaptamanal = (week)=>{

    return 0
}
export const calcCheltPFASaptamanal = (week)=>{

    return 0
}
