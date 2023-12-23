using BenchmarkDotNet.Attributes;
using DsaDotnet.Graphs;

namespace Benchmarks.Graphs;

public class DfsBenchmarks
{
    private static readonly RandomNetworkGenerator<int> _randomNetworkGenerator = new();
    private Graph<int> _graph = null!;
    [Params(100, 1000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _graph = new Graph<int>();
        _graph.AddNodes(_randomNetworkGenerator.GenerateRandomNetwork(N, n => n));
    }

    [Benchmark]
    [BenchmarkCategory("Graph")]
    public void Bfs()
    {
        _graph.DepthFirstSearch(0, i => i == N - 1);
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _graph = null!;
    }
}
