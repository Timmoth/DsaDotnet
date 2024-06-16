Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order, continuing until the list is sorted.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Sorting/Bubble.cs)

#### Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.BubbleSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.BubbleSortInPlace();
```

#### Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *BubbleSort*
```