const rng = require('../random.mjs');

class Scenario {
    constructor(scene, options, optionOutputs) {
        this.scene = scene;
        this.options = options;
        this.outputs = optionOutputs;
    }
    
    getScene() {
        return this.scene;
    }

    getOptions() {
        return this.options;
    }

    getOutput(option) {
        const options = this.outputs[option];
        const rand = rng.getRandomInt(this.outputs[option].length);
        return options[rand];
    }
}

module.exports = {Scenario};