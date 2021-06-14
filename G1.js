class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("lisbon");
g.addVertex("venice");
g.addVertex("rome");
g.addVertex("Boston");
g.addVertex("arlington");
console.log(g);

console.log("=========== Adding Edge ==========");
g.addEdge("lisbon", "venice");
g.addEdge("lisbon", "rome");
g.addEdge("venice", "rome");
g.addEdge("arlington", "lisbon");
g.addEdge("arlington", "Boston");
console.log(g);

console.log("=========== Removiong Edge ==========");
//g.removeEdge("foumban", "rome");
//g.removeEdge("foumban", "london");
console.log(g);

console.log("=========== Removiong Vertex ==========");
g.removeVertex("lisbon");
console.log(g);
