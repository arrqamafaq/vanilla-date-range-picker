import "./style.css";
import { Datepicker } from "./datepicker";

// Mount to #app
const appRoot = document.getElementById("app");
appRoot.className="w-full h-screen flex justify-center items-center"

const DatepickerContainer=document.createElement("div");
DatepickerContainer.className="w-[70%] h-[65%]";
DatepickerContainer.appendChild(Datepicker())

appRoot.appendChild(DatepickerContainer);

