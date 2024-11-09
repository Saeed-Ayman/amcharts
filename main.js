import './style.css'
import XYCharts , { run } from "./components/XYCharts.js";

document.querySelector('#app').innerHTML = `${XYCharts}`

run();
