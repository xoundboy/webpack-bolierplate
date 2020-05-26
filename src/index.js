import {EventEmitter} from 'events';

const eventBus = new EventEmitter();

class MyPlayer {
    constructor() {
        eventBus.on('error', data => {
            // do something (NEVER EXECUTES)
            console.log("error", data);
        });
    }
    init() {
        // just emit an error event - should be handled by the listener set in the constructor
        eventBus.emit('error', { errorData: {} });
    }
}

const myPlayer = new MyPlayer();
myPlayer.init();
