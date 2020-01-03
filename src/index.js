import { cube } from './math.js'
import './style.css';
import Icon from './icon.png';
import data from './data.json';
import printMe from './print.js';
import * as _ from 'lodash'

function component() {
    console.log(data)

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    const element = document.createElement('pre');

    element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon

    element.appendChild(myIcon)
    element.appendChild(btn);

    return element;
}

function lodashFunction() {
    _.clone({})
}

lodashFunction();
document.body.appendChild(component());

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
