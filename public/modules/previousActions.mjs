class PreviousActions {
    constructor() {
        this.actions = [];
        this.maxLength = 5;
    }

    push = (action) => {
        if(this.actions.length >= 5) {
            this.actions = this.actions.slice(1,4);
        }
        this.actions.push(action);
    }

    toJSON = () => {
        return JSON.stringify(this.actions);
    }

    pop = () => {
        const action = this.actions.pop();
        return action;
    }
}

module.exports = { PreviousActions };