using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Search;

public class BinarySearchBenchmarks
{
    private int[] _sortedItems = null!;

    [Params(1000, 10000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _sortedItems = Enumerable.Range(0, N).ToArray();
    }

    [Benchmark]
    [BenchmarkCategory("Search")]
    public void BinarySearch()
    {
        _sortedItems.BinarySearch((int)(N * 0.75));
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _sortedItems = null!;
    }
}
