import "./style.css";
import DatePicker from "./DatePicker";

// Mount to #app
const appRoot = document.getElementById("root");
appRoot.className = "w-full h-screen flex justify-center items-center";

const container = document.createElement("div");
container.className = "w-[80%] max-w-[620px] h-[70%]";
//using datePicker as component
container.appendChild(DatePicker());

appRoot.appendChild(container);
