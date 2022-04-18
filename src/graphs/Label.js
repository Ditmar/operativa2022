class Label {
    constructor(parent, weight) {
        this.parent = parent;
        this.weight = weight;
        this.permanent = false;
        this.labelText = '';
    }
    getParent = () => {
        return this.parent;
    }
    getWeight = () => {
        return this.weight;
    }
    setPermanent = (permanent) => {
        this.permanent = permanent;
    }
    setWeight = (weight) => {
        this.weight = weight
    }
    setParent = (parent) => {
        this.parent = parent
    }
    getPermanent = () => {
        return this.permanent;
    }
}
export default Label;