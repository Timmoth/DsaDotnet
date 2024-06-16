A sequence where each term is the sum of the two preceding terms, starting with 0 and 1.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Series/Fibonacci.cs)

```
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

#### Usage
```cs
ulong result = Series.Fibonacci(1000);
result = 1000.Fibonacci();
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Benchmarks/Series/FibonacciBenchmarks.cs)
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Series/FibonacciTests.cs)