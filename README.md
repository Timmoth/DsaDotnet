# DsaDotnet
A dotnet class library containing a collection of algorithms and datastructures.

The objective of this library is to cement my understanding of datastructures & algorithms whilst also trying out some of dotnet 8' latest features.

If you can think of a way to improve any of the existing implementations feel free to open a PR and see if you can beat my benchmarks!

## Benchmarks

Each push to main triggers the benchmarks to be ran and compared against the previous version, [you can see them here](https://timmoth.github.io/DsaDotnet/dev/bench/)

Run all the benchmarks locally
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release --job short --filter '*' --memory --join
```

Run a specific set of benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release --job short --memory --f *Fibonacci*
```

## Tests
All tests must pass before a PR can be merged into main.

Run all the tests locally
```console
dotnet test
```

I use [Stryker mutation testing](https://github.com/stryker-mutator/stryker-net) to help identify missing tests
```console
dotnet tool install --global dotnet-stryker
dotnet-stryker
```
Running Stryker will output a report outlining which mutations (essentially bugs) were introduced into your code that did not cause any tests to fail.

## Sequence and Series Algorithms
---
To run the benchmarks for all sorting algorithms:
```console
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Series --join
```

### Factorial
Usage
```cs
ulong result = Series.Factorial(1000)
result = 1000.Factorial();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Factorial*
```

### Fibonacci
Usage
```cs
ulong result = Series.Fibonacci(1000)
result = 1000.Fibonacci();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```

### Primes
Usage
```cs
List<int> result = Series.PrimesUpTo(1000)
result = 1000.PrimesUpTo();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Primes*
```

## Graphs
---
To run the benchmarks for all graph algorithms:
```console
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Graph --join
```

### Breadth first search
Usage
```cs
var graph = new Graph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var path = graph.BreadthFirstSearch(0, n => n == 3);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Bfs*
```

## Sorting
---

To run the benchmarks for all sorting algorithms:
```
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Sorting --join
```

### Bubble Sort
Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.BubbleSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.BubbleSortInPlace();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *BubbleSort*
```

### Insertion Sort
Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.InsertionSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.InsertionSort();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *InsertionSort*
```

### Merge Sort
Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.MergeSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.MergeSort();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *MergeSort*
```

### Quick Sort
Usage
```cs
List<int> result = new[] { 5, 4, 3, 2, 1 }.QuickSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.QuickSort();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *QuickSort*
```