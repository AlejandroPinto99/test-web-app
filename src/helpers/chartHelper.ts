
const get7days = () => {
    const dates = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d
    })

    return dates;
}

const getMonthLabel = (month: number) => {
        if(month){
        if (month === 1) return "   Jan";
        else if (month === 2) return "Feb";
        else if (month === 3) return "Mar";
        else if (month === 4) return "Apr";
        else if (month === 5) return "May";
        else if (month === 6) return "Jun";
        else if (month === 7) return "Jul";
        else if (month === 8) return "Ago";
        else if (month === 9) return "Sep";
        else if (month === 10) return "Oct";
        else if (month === 11) return 'Nov'
        return "Dec";
        }
    }

const DateChartFormat = (days: Date[]) => {
    const daysFormat = []
    if(days) {
        for(let i = 0; i < 7 ; i++) {
            let month = getMonthLabel(days[i].getMonth() + 1);
            let day = days[i].getDate();
            daysFormat.push(`${month} ${day}`);
        }
    }

    return daysFormat;
}

export {get7days, getMonthLabel, DateChartFormat}





//

// const getDateLabel = () => {
//     const today = new Date()
//     const Last7Days = []
//     for(let i = 0; i < 7 ; i++){
//         let day;
//         let month;
//         if(today.getDate() - i <= 0){
//             today 
//         }
//     }
// }


// export {getDateLabel}