import {generateDeal} from './data.js';


const DEALS_COUNT = 10;
const similarDeals  = new Array(DEALS_COUNT).fill(null).map(() => generateDeal());

similarDeals ; //чтобы небыло ошибки в файле
