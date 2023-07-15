import VimeoPlayer from '@vimeo/player';
import LoDashStatic from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const userStorage = 'videoplayer-current-time';

player.on('timeupdate', LoDashStatic(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem(userStorage, data.seconds);
}

player
  .setCurrentTime(localStorage.getItem(userStorage) || 0)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
