Each push to main triggers the benchmarks to be ran and compared against the previous version, [you can see them here](https://timmoth.github.io/DsaDotnet/dev/bench/)

Run all the benchmarks locally
```bash
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release --job short --filter '*' --memory --join
```

Run a specific set of benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release --job short --memory --f *Fibonacci*
```