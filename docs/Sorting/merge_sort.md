Divides the input list into smaller lists, sorts those smaller lists, and then merges them back together in a sorted manner.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Sorting/Merge.cs)

#### Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.MergeSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.MergeSort();
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Benchmarks/Sorting/MergeSortBenchmarks.cs)

```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *MergeSort*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Sorting/MergeSortTests.cs)