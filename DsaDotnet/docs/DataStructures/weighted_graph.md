A collection of vertices connected by edges, where each edge has an associated weight.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Graphs/WeightedGraph.cs)

#### Usage
```cs
 var graph = new WeightedGraph<int>();
 graph.AddEdges(new []{(0, 1), (1, 2), (2, 3)}, 1);
 graph.AddEdges((3, 4, 1), (4, 5, 1));

```