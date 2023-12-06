const date = new Date();
const startMonth = (prompt("Enter start month (mm)"));
const startDate = (prompt("Enter start date (dd)"));
const startYear = (prompt("Enter start year (yyyy)"));
const startDateMS = new Date(`${startMonth}/${startDate}/${startYear}`).getTime();
const selectedTimeBucket = parseInt(prompt("Select timebucket (1 for 445, 2 for 544, 3 for 454)"));
const currentDateMS = new Date().getTime();
var calculatedDateMS = startDateMS;
const oneDayMS = 86400000;
const oneWeekDaysMS = parseInt(oneDayMS) * 7; 
const selectedArr = [[4,4,5],[5,4,4],[4,5,4]];

while(parseInt(calculatedDateMS) < parseInt(currentDateMS))
{
    selectedArr[parseInt(selectedTimeBucket-1)].forEach((item,index,arr)=>{
        let calculatedWeekMS = parseInt(item) * oneWeekDaysMS;
        calculatedDateMS = parseInt(calculatedDateMS) + parseInt(calculatedWeekMS);
        console.log(new Date(calculatedDateMS).toString());
    })
}