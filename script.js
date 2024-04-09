var carTrafficLights = document.getElementById('car-light-image');
var personTrafficLights = document.getElementById('person-light-image');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function changeLights() {
    carTrafficLights.src = 'images/amberLight.png';
    await sleep(2000);
    carTrafficLights.src = 'images/redLight.png';
    await sleep(1000);
    personTrafficLights.src = 'images/walk.png';
    await sleep(5000);
    personTrafficLights.src = 'images/dontWalk.png';
    carTrafficLights.src = 'images/amberLight.png';
    await sleep(2000);
    carTrafficLights.src = 'images/greenLight.png'
}