import { addMonths, format } from "date-fns";
import Button from "./ui/Button";
import { getSelectedMonth, setSelectedMonth } from "../state/calenderState";

export default function CalenderHeader(selectedDate) {
  const header = document.createElement("div");
  header.className = "flex justify-between items-center";
  // header.textContent = "Header - Month & year + buttons";

  const prevBtn = Button({
    text: "",
    className: "text-2xl hover:text-zinc-500",
  });
  prevBtn.innerHTML = `
  <i class="fa-solid fa-arrow-left"></i>
  `;
  prevBtn.id = "prev-btn";
  const nextBtn = Button({
    text: "",
    className: "text-2xl hover:text-zinc-500",
  });
  nextBtn.innerHTML = `
  <i class="fa-solid fa-arrow-right"></i>
  `;
  nextBtn.id = "next-btn";

  const monthLabel = document.createElement("div");
  monthLabel.id = "month-label";
  monthLabel.className = "text-2xl text-center font-bold";
  monthLabel.textContent = format(selectedDate, "MMMM - yyyy");

  nextBtn.addEventListener("click", () => {
    setSelectedMonth(addMonths(getSelectedMonth(), 1));
  });

  prevBtn.addEventListener("click", () => {
    setSelectedMonth(subMonths(getSelectedMonth(), 1));
  });

  header.appendChild(prevBtn);
  header.appendChild(monthLabel);
  header.appendChild(nextBtn);

  header.id = "calender-header";
  return header;
}
