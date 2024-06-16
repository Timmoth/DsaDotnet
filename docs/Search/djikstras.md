Find the shortest path between nodes in a graph with non-negative edge weights, by iteratively selecting the node with the minimum distance from the starting node and updating distances to adjacent nodes.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Search/Dijkstra.cs)

#### Usage
```cs
var graph = new WeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var path = graph.Dijkstra(0, n => n.Key == 3);
```

#### Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Dijkstra*
```