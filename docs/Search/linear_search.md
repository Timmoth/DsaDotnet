Iterate through each element sequentially from the start until the end until the desired element is found.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Search/LinearSearch.cs)

#### Usage
```cs
var index = new []{ 1, 2, 3}.LinearSearch(2);
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Benchmarks/Search/LinearSearchBenchmarks.cs)
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *LinearSearch*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Search/LinearSearchTests.cs)