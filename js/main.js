import { models } from './modelsData.js';
import { getModel } from './getModel.js';

const car1 = document.querySelector('.car-1');
const car2 = document.querySelector('.car-2');

let car1Position = 0;
let car2Position = 0;



const car1model = getModel(models);
const car2model = getModel(models);

car1.dataset.model = car1model;
car2.dataset.model = car2model;



const windowWidth = innerWidth;
const carWidth = 150;
const finishWidth = 40;
const finishRightGap = 10;
const distanceToFinish = windowWidth - carWidth - finishWidth - finishRightGap;




addEventListener('keyup', (event) => {
    const key = event.key;
    if (key === 'w') {
        car1Position += 50;
        car1.style.left = car1Position + 'px';
        if (car1Position > distanceToFinish)
            console.log('pirma laimejo');
        location.reload();



    }
    if (key === 'p') {
        car2Position += 50;
        car2.style.left = car2Position + 'px';
        if (car2Position > distanceToFinish)
            console.log('antra laimejo');
        location.reload();
    }

})