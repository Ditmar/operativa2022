
class Dfs {
    
    constructor(vertex) {
        this.source = vertex;
        this.dfs(this.source);
    }
    dfs(vertex) {

        if (vertex == null) {
            return;
        }

        if (vertex.getVisited() == true) {
            return;
        }
        vertex.setVisited(true);
        console.log(vertex.getLabel());
        let edges = vertex.getEdges();
        edges.map((edge) => {
            let destination = edge.getDestination();
            this.dfs(destination);
        });
    }
}
export default Dfs;