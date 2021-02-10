import {apartmentDeals} from './data.js';

const DEALS_COUNT = new Array(10).fill(null).map(() => apartmentDeals());

DEALS_COUNT; //чтобы небыло ошибки в файле
