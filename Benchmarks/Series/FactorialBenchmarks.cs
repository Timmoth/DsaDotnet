using BenchmarkDotNet.Attributes;
using DsaDotnet;

namespace Benchmarks.Series;

public class FactorialBenchmarks
{
    [Params(100, 1000)] public int N { get; set; }

    [Benchmark]
    [BenchmarkCategory("Series")]
    public void Fact()
    {
        N.Factorial();
    }
}
