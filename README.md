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
| Method         | Mean       | Error     | StdDev    | Allocated |
|--------------- |-----------:|----------:|----------:|----------:|
| FibonacciLarge | 26.4115 ns | 0.3041 ns | 0.0167 ns |         - |
| FibonacciSmall |  0.0050 ns | 0.0563 ns | 0.0031 ns |         - |