class Edge {
    constructor (source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    getDestination() {
        return this.destination;
    }
    getSource() {
        return this.source;
    }
    setSource(source) {
        this.source = source;
    }
    setDestination(destination) {
        this.destination = destination;
    }
}
export default Edge;