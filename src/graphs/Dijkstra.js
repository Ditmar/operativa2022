class Dijkstra {
    constructor(source, graph) {
        this.labelList = [];
        this.graph = graph.getVertexList();
        this.source = source;
    }
    solve = () => {
        if (!this.source) {
            throw 'Es necesario un vertice origen';
        }
        this.source.update(null, 0);
        this.source.getLabelObject().setPermanent(true);
        //strcutura base del algoritmo
        while (!this.isFinish()) {
            for(let i = 0; i < this.source.getVertexList().length; i++) {
                let vertexAdyacent = this.source.getVertexList()[i];
                let edge = this.source.edgesHashMap[`${this.source.label}_${vertexAdyacent.label}`];
                let {weight} = edge;
                if (vertexAdyacent.getLabelObject().getWeight() == null) {
                    vertexAdyacent.update(this.source, this.source.getLabelObject().getWeight() + weight);
                } else if (vertexAdyacent.visited == false && this.source.getLabelObject().getWeight() + weight < vertexAdyacent.getLabelObject().getWeight()) {
                    vertexAdyacent.update(this.source, this.source.getLabelObject().getWeight() + weight);
                }
            }
            let minimus = Infinity;
                for (let i = 0; i < this.graph.length; i++) {
                    let labelTag = this.graph[i].labelObject;
                    if (labelTag.permanent == false && this.graph[i].labelObject.getWeight() != null) {
                        if (labelTag) {
                            if (labelTag.getWeight() < minimus) {
                                minimus = labelTag.getWeight();
                                this.source  = this.graph[i];
                            }
                        }
                    }
                }
                this.source.getLabelObject().setPermanent(true);
        }
    }
    isFinish() {
        let vertexList = this.graph;
        for (let i = 0; i < vertexList.length; i++) {
            let vertex = vertexList[i];
            if (vertex.getLabelObject().getPermanent() == false) {
                return false;
            }
        } 
        return true;
    }
}
export default Dijkstra;