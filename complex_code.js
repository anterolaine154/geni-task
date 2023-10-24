/* 
Filename: complex_code.js
Description: This code demonstrates a complex algorithm for finding the shortest path in a weighted, directed graph using Dijkstra's algorithm.
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(source, destination, weight) {
    this.edges[source][destination] = weight;
  }

  getShortestPath(startNode, endNode) {
    const distances = {};
    const previous = {};
    const visited = new Set();

    distances[startNode] = 0;
    this.nodes.forEach((node) => {
      if (node !== startNode) distances[node] = Infinity;
    });

    let currentNode = startNode;
    while (currentNode !== endNode) {
      const neighbors = this.edges[currentNode];

      for (let neighbor in neighbors) {
        const distance = distances[currentNode] + neighbors[neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentNode;
        }
      }

      visited.add(currentNode);

      let nextNode = null;
      let shortestDistance = Infinity;
      this.nodes.forEach((node) => {
        if (!visited.has(node) && distances[node] < shortestDistance) {
          shortestDistance = distances[node];
          nextNode = node;
        }
      });

      if (!nextNode) throw new Error("No path found!");

      currentNode = nextNode;
    }

    const path = [];
    while (currentNode !== startNode) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }
    path.unshift(startNode);

    return path;
  }
}

// Create a graph
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 8);
graph.addEdge("C", "E", 10);
graph.addEdge("D", "E", 2);
graph.addEdge("D", "F", 6);
graph.addEdge("E", "F", 2);

const startNode = "A";
const endNode = "F";

// Evaluate shortest path using Dijkstra's algorithm
const shortestPath = graph.getShortestPath(startNode, endNode);
console.log(`Shortest path from ${startNode} to ${endNode}: ${shortestPath.join(" -> ")}`);