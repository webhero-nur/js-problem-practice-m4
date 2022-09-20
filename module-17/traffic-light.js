function trafficLight(signal) {
    if (signal === 'red') {
        console.log('Traffic light is red. Do not cross the street right now.');
    }
    else if (signal === 'yellow') {
        console.log('Traffic light is yellow now. You should stop.');
    }
    else if (signal === 'green') {
        console.log('Traffic light is green now. You should cross the street now.');
    }
    else {
        console.log('Error!!!');
    }
}

const signalRed = 'red';
const signalYellow = 'yellow';
const signalGreen = 'green';

trafficLight(signalRed);
trafficLight(signalYellow);
trafficLight(signalGreen);
trafficLight('noLight');