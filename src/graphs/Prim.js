import Vertex from "./Vertex";
import Edge from "./Edge";
class Prim {
    //constructor
    constructor(graph, source) {
        this.resultTree = [];
        //c
        this.conectedVertex = [];
        //CC
        // this.disconectedVertex = [...graph.getVertexList()];
        this.disconnectVertexs = graph.getVertexList();
        this.source = source;
        this.solve();
    }
    solve = () => {
        let jvertex = this.disconnectVertexs[0];
        let treeVertex = new Vertex(jvertex.getLabel());
        this.resultTree.push(treeVertex);
        jvertex.setVisited(true);
        this.conectedVertex.push(jvertex);
        this.remove(jvertex);
        //paso general k
        while(this.disconnectVertexs.length !== 0) {
            let {candidate, source, weight} = this.minPath();
            let treeVertex = new Vertex(candidate.getLabel());
            let sourceTree = this.resultTree.find((vertex) => vertex.getLabel() === source.getLabel());
            sourceTree.addVertex(treeVertex, weight);
            this.resultTree.push(treeVertex);
            candidate.setVisited(true);
            this.conectedVertex.push(candidate);
            this.remove(candidate);
        }
        console.log(this.conectedVertex);
        console.log(this.disconnectVertexs);
    }
    getResult = () => {
        return this.resultTree;
    }
    minPath = () => {
        let weight = Infinity;
        let candidate = null;
        let source = null;
        for (let i = 0; i < this.conectedVertex.length; i++) {
            source = this.conectedVertex[i];
            let edges = source.getEdges();
            for (let j = 0; j < edges.length; j++) {
                if (edges[j].getDestination().getVisited() === false && edges[j].getWeight() < weight) {
                    candidate = edges[j].getDestination();
                    weight = edges[j].getWeight();
                }
            }
        }
        return {candidate, source, weight};
    }
    //remove
    remove = (vertex) => {
        this.disconnectVertexs =  this.disconnectVertexs.filter((disconnectVertex) => vertex.getLabel() !== disconnectVertex.getLabel());
    }
}
export default Prim;