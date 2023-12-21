using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks;

public class FibonacciBenchmarks
{
    [Benchmark]
    public long FibonacciLarge()
    {
        return Fibonacci.Compute(1000);
    }

    [Benchmark]
    public long FibonacciSmall()
    {
        return Fibonacci.Compute(1);
    }
}
