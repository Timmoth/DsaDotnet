# DsaDotnet
A dotnet class library containing a collection of algorithms and datastructures

## Run the Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short
```

## Run the Tests
```
dotnet test
```

## Fibonacci

### Usage

```
var result = Fibonacci.Compute(1000);
```

### Benchmarks

```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```
| Method   | Mean      | Error     | StdDev    | Allocated |
|--------- |----------:|----------:|----------:|----------:|
| Fib10    |  3.447 ns | 1.3431 ns | 0.0736 ns |         - |
| Fib100   |  6.783 ns | 0.6839 ns | 0.0375 ns |         - |
| Fib1000  |  9.954 ns | 8.7206 ns | 0.4780 ns |         - |
| Fib10000 | 14.157 ns | 0.6288 ns | 0.0345 ns |         - |