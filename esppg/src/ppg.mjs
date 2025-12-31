import './style.css';
import { makeid } from './helpers/ppg-random.mjs';
import Group from './classes/ppg-group-class.mjs';
import DEBUG from './helpers/ppg-debug.mjs';

let g1 = new Group('g1');

g1.add('richard');
g1.add('dick');
g1.add('robert');
g1.add('bob');
g1.remove('dick');

DEBUG(g1.render());
DEBUG(g1);

let g2 = new Group('g2');
DEBUG(g2);

document.querySelector('#ppgui').innerHTML = `<h1>HELLO ${makeid()}</h1>`;
