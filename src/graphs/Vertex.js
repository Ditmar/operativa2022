import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import Edge from "./Edge";
import Label from "./Label";
class Vertex {
    constructor (label) {
        this.label = label;
        this.edges = [];
        this.edgesHashMap = {};
        this.visited = false;
        this.labelObject = {};
        this.listVertex = [];
        this.createLabel(null, null);
    }
    createLabel(parent, weight) {
        this.labelObject = new Label(parent, weight);
    }
    update(parent, weight) {
        this.labelObject.setWeight(weight);
        this.labelObject.setParent(parent);
        if (parent == null) {
            this.labelObject.labelText = `[-, ${weight}]`;
            return;
        }
        this.labelObject.labelText = `[${parent.label}, ${weight}]`;
    }
    getLabelObject() {
        return this.labelObject;
    }S
    getLabel() {
        return this.label;
    }
    addVertex(destination, weight) {
        let edge = new Edge(this, destination, weight);
        this.edges.push(edge);
        this.listVertex.push(destination);
        if (this.edgesHashMap[`${this.label}_${destination.label}`] == null) {
            this.edgesHashMap[`${this.label}_${destination.label}`] = edge;
        }
    }
    setVisited(isVisited) {
        this.visited = isVisited;
    }
    getVisited() {
        return this.visited;
    }
    getEdges() {
        return this.edges;
    }
    getVertexList() {
        return this.listVertex;
    }
}
export default Vertex;