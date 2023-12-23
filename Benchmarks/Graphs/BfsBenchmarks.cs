using BenchmarkDotNet.Attributes;
using DsaDotnet.Graphs;

namespace Benchmarks.Graphs;

public class BfsBenchmarks
{
    private static readonly RandomUnweightedNetworkGenerator<int> _randomNetworkGenerator = new();
    private UnWeightedGraph<int> _graph = null!;
    [Params(100, 1000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _graph = new UnWeightedGraph<int>();
        _graph.AddNodes(_randomNetworkGenerator.GenerateRandomNetwork(N, n => new Node<int> { Key = n }));
    }

    [Benchmark]
    [BenchmarkCategory("Graph")]
    public void Bfs()
    {
        _graph.BreadthFirstSearch(0, i => i.Key == N - 1);
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _graph = null!;
    }
}
