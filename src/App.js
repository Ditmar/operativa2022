import logo from './logo.svg';
import './App.css';
import Vertex from './graphs/Vertex';
//import Dfs from "./graphs/Dfs";
import Graphs from './graphs/Graph';
//import Prim from './graphs/Prim';
import Dijkstra from './graphs/Dijkstra';
import Floyd from './graphs/Floyd';
function App() {
  
  //MATRIZ DE ADYACENCIA 
  //Infinito
  const inf = 99999;
  let matrixAdy = 
               [[inf, 3, 6, inf, inf],//v1 -> 0
                [3, inf, 4, inf, 1], //v2 -> 1
                [6, 4, inf, inf, 3], //v3 -> 2
                [inf, inf, inf, inf, 1], //v3 -> 3
                [inf, 1, 3, 1, inf] //v3 -> 4
                ];
                //MXM
  //MATRIZ DE INCIDENCIA
 // NXM
 
  let matrixInc = [
    //e1, e2, e3, e4, e5, e6, e7
    [3,   inf, inf,   6, inf, inf, inf],  //v1
    [3,     4,   1, inf, inf, inf, inf],    // v2
    [inf,   4, inf,   6,   5,   3, inf], // v3
    [inf, inf, inf, inf, inf,   3,   1], // v4
    [inf, inf,   1, inf,   5, inf,   1], // v5

  ];


// REPRESENTACIÓN EN ORDENADOR BASADO EN LISTAS ENLAZADAS 
  let v1 = new Vertex("v1");
  let v2 = new Vertex("v2");
  let v3 = new Vertex("v3");
  let v4 = new Vertex("v4");
  let v5 = new Vertex("v5");
  //creo la instancia del grafo
  let graph = new Graphs([v1, v2, v3, v4, v5]);
  //v1
  v1.addVertex(v2, 3);
  v2.addVertex(v1, 3);
  v1.addVertex(v3, 6);
  v3.addVertex(v1, 6);
  //v2
  v2.addVertex(v5, 1);
  v5.addVertex(v2, 1);
  v5.addVertex(v4, 1);
  v2.addVertex(v3, 4);
  v3.addVertex(v2, 4);
  //v3
  v3.addVertex(v5, 5);
  v5.addVertex(v3, 5);
  v3.addVertex(v4, 3);
  v4.addVertex(v3, 3);
  // console.log(v1)

  // let dfs = new Dfs(v1);
  // console.log(v1);

  // let prim = new Prim(graph, v1);
  // let result = prim.getResult();
  // console.log(result);

  // let dijkstra = new Dijkstra(v1, graph);
  // dijkstra.solve();
  // console.log(graph);

  let floyd = new Floyd(matrixAdy);
  floyd.solve();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
