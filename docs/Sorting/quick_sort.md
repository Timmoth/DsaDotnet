Uses a divide-and-conquer strategy by selecting a "pivot" element from the list and partitioning the other elements into two sub-lists according to whether they are less than or greater than the pivot. The sub-lists are then sorted recursively.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Sorting/Quick.cs)

#### Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.QuickSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.QuickSort();
```

#### Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *QuickSort*
```