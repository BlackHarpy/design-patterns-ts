import {visitorDemo} from "./src/visitor/client"
import {builderDemo} from "./src/builder/client"
import {facadeDemo} from "./src/facade/client"
import {mementoDemo} from "./src/memento/client";

window.onload = function () {
    let builderButton = document.getElementById('builder-button');
    builderButton.addEventListener('click', function() {
        console.log('run builder example');
        builderDemo();
    });

    let visitorButton = document.getElementById('visitor-button');
    visitorButton.addEventListener('click', function() {
        console.log('run visitor example');
        visitorDemo();
    });

    let facadeButton = document.getElementById('facade-button');
    facadeButton.addEventListener('click', function() {
        console.log('run facade example');
        facadeDemo();
    });

    const mementoButton = document.getElementById('memento-button');
    mementoButton.addEventListener('click', function() {
        console.log('run memento example');
        mementoDemo();
    });
};

