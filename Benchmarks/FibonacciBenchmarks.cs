using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks;

public class FibonacciBenchmarks
{
    [Benchmark]
    public ulong Fib10()
    {
        return Fibonacci.Compute(10);
    }

    [Benchmark]
    public ulong Fib100()
    {
        return Fibonacci.Compute(100);
    }

    [Benchmark]
    public ulong Fib1000()
    {
        return Fibonacci.Compute(1000);
    }

    [Benchmark]
    public ulong Fib10000()
    {
        return Fibonacci.Compute(10000);
    }
}
