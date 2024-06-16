Explore all neighbor nodes at the present depth before moving on to nodes at the next depth level.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Search/Bfs.cs)

#### Usage
```cs
var graph = new UnWeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var node = graph.BreadthFirstSearch(0, n => n.Key == 3);
```

#### Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Bfs*
```