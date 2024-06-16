Find a value within a sorted array by dividing the search interval in half at each step.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Search/BinarySearch.cs)

#### Usage
```cs
var index = new []{ 1, 2, 3}.BinarySearch(2);
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Search/BinarySearchTests.cs)
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *BinarySearch*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Search/BinarySearchTests.cs)