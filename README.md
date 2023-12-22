# DsaDotnet
A dotnet class library containing a collection of algorithms and datastructures.

The objective of this library is to cement my understanding of datastructures & algorithms whilst also trying out some of dotnet 8' latest features.

If you can think of a way to improve any of the existing implementations feel free to open a PR and see if you can beat my benchmarks!

## Benchmarks

Each push to main triggers the benchmarks to be ran and compared against the previous version, [you can see them here](https://timmoth.github.io/DsaDotnet/dev/bench/)

Run all the benchmarks locally
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short
```

Run a specific set of benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```

## Tests
All tests must pass before a PR can be merged into main.

Run all the tests locally
```
dotnet test
```

I use [Stryker mutation testing](https://github.com/stryker-mutator/stryker-net) to help identify missing tests
```
dotnet tool install --global dotnet-stryker
dotnet-stryker
```
Running Stryker will output a report outlining which mutations (essentially bugs) were introduced into your code that did not cause any tests to fail.

## Sequence and Series Algorithms
---
To run the benchmarks for all sorting algorithms:
```
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Series --join
```

### Factorial
Usage
```
ulong result = Series.Factorial(1000)
result = 1000.Factorial();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Factorial*
```

### Fibonacci
Usage
```
ulong result = Series.Fibonacci(1000)
result = 1000.Fibonacci();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```

### Primes
Usage
```
List<int> result = Series.PrimesUpTo(1000)
result = 1000.PrimesUpTo();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Primes*
```

## Sorting
---

To run the benchmarks for all sorting algorithms:
```
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Sorting --join
```

### Bubble Sort
Usage
```
List<int> result = new[] { 5, 4, 3, 2, 1 }.BubbleSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.BubbleSortInPlace();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *BubbleSort*
```

### Insertion Sort
Usage
```
List<int> result = new[] { 5, 4, 3, 2, 1 }.InsertionSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.InsertionSort();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *InsertionSort*
```

### Merge Sort
Usage
```
List<int> result = new[] { 5, 4, 3, 2, 1 }.MergeSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.MergeSort();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *MergeSort*
```

### Quick Sort
Usage
```
List<int> result = new[] { 5, 4, 3, 2, 1 }.QuickSort();

int[] input = new[] { 5, 4, 3, 2, 1 };
input.QuickSort();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *QuickSort*
```

| Method               | N     | Mean        | Error       | StdDev     | Allocated  |
|--------------------- |------ |------------:|------------:|-----------:|-----------:|
| MergeSort_Ascending  | 100   |    15.00 us |    93.22 us |   5.110 us |     8.2 KB |
| MergeSort_Random     | 100   |    16.63 us |    66.14 us |   3.625 us |     8.2 KB |
| MergeSort_Descending | 100   |    13.03 us |    78.90 us |   4.325 us |     8.2 KB |
| MergeSort_Ascending  | 1000  |   158.10 us |   352.46 us |  19.319 us |   90.53 KB |
| MergeSort_Random     | 1000  |   313.80 us | 1,318.80 us |  72.288 us |   90.53 KB |
| MergeSort_Descending | 1000  |   178.10 us |   290.09 us |  15.901 us |   90.53 KB |
| MergeSort_Ascending  | 10000 | 1,501.20 us | 2,478.51 us | 135.856 us | 1047.28 KB |
| MergeSort_Random     | 10000 | 2,330.73 us | 1,797.01 us |  98.500 us | 1047.28 KB |
| MergeSort_Descending | 10000 | 1,524.13 us |   581.27 us |  31.862 us | 1047.28 KB |