import './video.scss';
import 'plyr/src/sass/plyr.scss';
import Plyr from 'plyr';

const players = Array.from(document.querySelectorAll('.video__player'));
players.map((player) => new Plyr(player));
