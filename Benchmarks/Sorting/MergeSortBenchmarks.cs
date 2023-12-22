using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Sorting;

public class MergeSortBenchmarks
{
    private int[] _ascendingOrder = null!;
    private int[] _descendingOrder = null!;
    private int[] _randomOrder = null!;
    [Params(100, 1000, 10000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _ascendingOrder = SortingTestHelpers.GenerateAscendingArray(N);
        _randomOrder = SortingTestHelpers.GenerateRandomArray(N);
        _descendingOrder = SortingTestHelpers.GenerateDescendingArray(N);
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void MergeSort_Ascending()
    {
        _ascendingOrder.MergeSortInPlace();
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void MergeSort_Random()
    {
        _randomOrder.MergeSortInPlace();
    }

    [Benchmark]
    [BenchmarkCategory("Sorting")]
    public void MergeSort_Descending()
    {
        _descendingOrder.MergeSortInPlace();
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _randomOrder = null!;
        _ascendingOrder = null!;
        _descendingOrder = null!;
    }
}
