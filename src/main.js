import './style.css'
import {Hero} from './components/hero.js'
import {Mid} from './components/MidPage.js'


document.querySelector('#app').innerHTML = `
    <div>
        ${Hero()}
        ${Mid()}
    </div>
`;

