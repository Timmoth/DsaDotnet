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

## Data Structures

### Binary Tree
A hierarchical data structure composed of nodes. Each node can have a left and right child node where left node is less than and the right node is greater than the parent node.

Usage
```cs
 var tree = new BinaryTree<int>();
 tree.Insert(0, 1, 2, 3);
 var node = tree.Search(2);
```

### Unweighted Graph
A collection of vertices connected by edges.

Usage
```cs
 var graph = new UnWeightedGraph<int>();
 graph.AddEdges((0, 1), (1, 2), (2, 3));
```

### Weighted Graph
A collection of vertices connected by edges, where each edge has an associated weight.

Usage
```cs
 var graph = new WeightedGraph<int>();
 graph.AddEdges(new []{(0, 1), (1, 2), (2, 3)}, 1);
 graph.AddEdges((3, 4, 1), (4, 5, 1));

```

## Sequence and Series Algorithms
To run the benchmarks for all Sequence and Series algorithms:
```console
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Series --join
```

### Factorial
---
Denoted by n!, the factorial of an unsigned integer is the product of all integers less then or equal to n.

```
n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

0! = 1
1! = 1
2! = 2
3! = 6
```

Usage
```cs
ulong result = Series.Factorial(1000);
result = 1000.Factorial();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Factorial*
```

### Fibonacci
---
A sequence where each term is the sum of the two preceding terms, starting with 0 and 1.

```
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

Usage
```cs
ulong result = Series.Fibonacci(1000);
result = 1000.Fibonacci();
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Fibonacci*
```

### Primes
---
Unsigned integers greater than 1 that have no positive divisors other than 1 and themselves.

```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29
```

Usage
```cs
List<int> result = Series.PrimesUpTo(1000);
result = 1000.PrimesUpTo();
```
Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Primes*
```

## Search Algorithms
To run the benchmarks for all search algorithms:
```console
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Search --join
```

### Linear Search
---

Iterate through each element sequentially from the start until the end until the desired element is found.

Usage
```cs
var index = new []{ 1, 2, 3}.LinearSearch(2);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *LinearSearch*
```

### Binary Search
---

Find a value within a sorted array by dividing the search interval in half at each step.

Usage
```cs
var index = new []{ 1, 2, 3}.BinarySearch(2);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *BinarySearch*
```

### Breadth first search
---

Explore all neighbor nodes at the present depth before moving on to nodes at the next depth level.

Usage
```cs
var graph = new UnWeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var node = graph.BreadthFirstSearch(0, n => n.Key == 3);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Bfs*
```

### Depth first search
---

Explore as far as possible along each branch before backtracking.

Usage
```cs
var graph = new UnWeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var node = graph.DepthFirstSearch(0, n => n.Key == 3);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Dfs*
```

### Dijkstra's
---

Find the shortest path between nodes in a graph with non-negative edge weights, by iteratively selecting the node with the minimum distance from the starting node and updating distances to adjacent nodes.

Usage
```cs
var graph = new WeightedGraph<int>();
graph.AddEdges((0, 1), (1, 2), (2, 3));
var path = graph.Dijkstra(0, n => n.Key == 3);
```
Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Dijkstra*
```

## Sorting Algorithms

To run the benchmarks for all sorting algorithms:
```
 dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --allCategories=Sorting --join
```

### Bubble Sort
---

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order, continuing until the list is sorted.

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
---

Builds the final sorted list one item at a time, taking each element from the input list and inserting it into its correct position within the already sorted part of the list.

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
---

Divides the input list into smaller lists, sorts those smaller lists, and then merges them back together in a sorted manner.

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
---

Uses a divide-and-conquer strategy by selecting a "pivot" element from the list and partitioning the other elements into two sub-lists according to whether they are less than or greater than the pivot. The sub-lists are then sorted recursively.

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

## Arithmetic Algorithms

### Greatest Common Divisor
---

The largest positive integer that divides two or more numbers without leaving a remainder.

Usage
```cs
var result = Arithmetic.GCD(10, 20);
```

### Least Common Multiple
---

The smallest positive integer that is a multiple of two or more numbers.

Usage
```cs
var result = Arithmetic.LCM(10, 20);
result = Arithmetic.LCM(10, 20, 30);
```