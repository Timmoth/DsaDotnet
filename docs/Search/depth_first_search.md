Explore as far as possible along each branch before backtracking.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Search/Dfs.cs)

#### Usage
```cs
var graph = new UnWeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var node = graph.DepthFirstSearch(0, n => n.Key == 3);
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Benchmarks/Search/DfsBenchmarks.cs)
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Dfs*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Search/DfsTests.cs)