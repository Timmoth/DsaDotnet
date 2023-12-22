using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Series;

public class PrimesBenchmarks
{
    [Params(10, 100, 1000, 10000)] public int N { get; set; }

    [Benchmark]
    [BenchmarkCategory("Series")]
    public void ComputePrimes()
    {
        N.PrimesUpTo();
    }
}
