/* SelectionSort */
import  SelectionSort from './util/SelectionSort.js';

window.onload = () => {
    const ss = new SelectionSort();
    console.log('SelectionSort', ss.selectionSort([9,5,8,6,7,3,4,96,1,8,3,3,5,4,85,5,5]));  
};