using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Sorting;

public class QuickSortBenchmarks
{
    private int[] _ascendingOrder = null!;
    private int[] _descendingOrder = null!;
    private int[] _randomOrder = null!;
    [Params(1000, 10000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _ascendingOrder = SortingTestHelpers.GenerateAscendingArray(N);
        _randomOrder = SortingTestHelpers.GenerateRandomArray(N);
        _descendingOrder = SortingTestHelpers.GenerateDescendingArray(N);
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void QuickSort_Ascending()
    {
        _ascendingOrder.QuickSortInPlace();
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void QuickSort_Random()
    {
        _randomOrder.QuickSortInPlace();
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void QuickSort_Descending()
    {
        _descendingOrder.QuickSortInPlace();
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _randomOrder = null!;
        _ascendingOrder = null!;
        _descendingOrder = null!;
    }
}
