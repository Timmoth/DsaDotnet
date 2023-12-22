using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks;

public class BubbleSortBenchmarks
{
    private int[] _ascendingOrder = null!;
    private int[] _descendingOrder = null!;
    private int[] _randomOrder = null!;

    [Params(100, 1000, 10000)] public int N { get; set; }

    [IterationSetup]
    public void Setup()
    {
        _ascendingOrder = GenerateAscendingArray(N);
        _randomOrder = GenerateRandomArray(N);
        _descendingOrder = GenerateDescendingArray(N);
    }

    [Benchmark]
    public void Bubble_Ascending()
    {
        _ascendingOrder.BubbleSortInPlace();
    }

    [Benchmark]
    public void Bubble_Random()
    {
        _randomOrder.BubbleSortInPlace();
    }

    [Benchmark]
    public void Bubble_Descending()
    {
        _descendingOrder.BubbleSortInPlace();
    }

    [IterationCleanup]
    public void Cleanup()
    {
        _randomOrder = null!;
        _ascendingOrder = null!;
        _descendingOrder = null!;
    }

    private static int[] GenerateAscendingArray(int size)
    {
        var array = new int[size];
        for (var i = 0; i < size; i++) array[i] = i;

        return array;
    }

    private static int[] GenerateRandomArray(int size)
    {
        var random = new Random(0);
        var array = new int[size];
        for (var i = 0; i < size; i++) array[i] = random.Next();
        return array;
    }

    private static int[] GenerateDescendingArray(int size)
    {
        var array = new int[size];
        for (var i = 0; i < size; i++) array[i] = size - i;

        return array;
    }
}