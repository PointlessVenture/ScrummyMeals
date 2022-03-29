const {getRandomInt} = require("../RNG.mjs");

class Scenario {
    constructor(scene, options, optionOutputs) {
        this.scene = scene;
        this.option = options;
        this.outputs = optionOutputs;
    }
    
    getScene() {
        return this.scene;
    }

    getOptions() {
        return this.options;
    }

    getOutputs(option) {
        const options = this.ouputs[option];
        return options[getRandomInt(this.outputs[option].length)];
    }
}

module.exports = {Scenario};