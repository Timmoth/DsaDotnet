using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks;

public class FibonacciBenchmarks
{
    [Params(10, 100, 1000, 10000)] public int N { get; set; }

    [Benchmark]
    public ulong Fib()
    {
        return Fibonacci.Compute(N);
    }
}