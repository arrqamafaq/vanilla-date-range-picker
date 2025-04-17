import { format, getUnixTime } from "date-fns";
import generateCalenderGrid from "../../utils/generateCalenderDates";

export default function CalenderGrid(selectedDate){

    const dates = generateCalenderGrid(selectedDate);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-7 gap-1";

    dates.forEach((date)=>{
        const day = document.createElement("button");
        day.textContent=format(date,"d");
        day.id=getUnixTime(date);

        grid.appendChild(day);
    });

    return grid;

}