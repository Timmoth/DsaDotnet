Builds the final sorted list one item at a time, taking each element from the input list and inserting it into its correct position within the already sorted part of the list.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Sorting/Insertion.cs)

#### Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.InsertionSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.InsertionSort();
```

#### [Benchmarks](https://github.com/Timmoth/DsaDotnet/blob/main/Benchmarks/Sorting/InsertionSortBenchmarks.cs)

```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *InsertionSort*
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Sorting/InsertionSortTests.cs)