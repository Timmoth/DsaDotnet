using BenchmarkDotNet.Attributes;
using DsaDotnet;
using DsaDotnet.Graphs;

namespace Benchmarks.Search;

public class DijkstraBenchmark
{
    private static readonly RandomWeightedNetworkGenerator<int> _randomNetworkGenerator = new();
    private WeightedGraph<int> _graph = null!;
    [Params(100, 1000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _graph = new WeightedGraph<int>();
        _graph.AddNodes(_randomNetworkGenerator.GenerateRandomNetwork(N, n => new WeightedGraphNode<int> { Key = n }));
    }

    [Benchmark]
    [BenchmarkCategory("Search")]
    public void Dijkstra()
    {
        _graph.Dijkstra(0, i => i.Key == N - 1);
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _graph = null!;
    }
}
