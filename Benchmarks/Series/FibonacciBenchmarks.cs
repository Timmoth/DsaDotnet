using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Series;

public class FibonacciBenchmarks
{
    [Params(1000, 10000)] public int N { get; set; }

    [Benchmark]
    [BenchmarkCategory("Series")]
    public void Fib()
    {
        N.Fibonacci();
    }
}
