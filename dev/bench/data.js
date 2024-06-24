window.BENCHMARK_DATA = {
  "lastUpdate": 1719231605434,
  "repoUrl": "https://github.com/Timmoth/DsaDotnet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "timmoth",
            "username": "Timmoth"
          },
          "committer": {
            "email": "t.jones@timmoth.com",
            "name": "timmoth",
            "username": "Timmoth"
          },
          "distinct": true,
          "id": "f97525773b6fecb8a7704c14fb4c9f5dfdb1b9dc",
          "message": "Merge branch 'main' of https://github.com/Timmoth/DsaDotnet",
          "timestamp": "2024-06-24T13:14:58+01:00",
          "tree_id": "00bf73c7b45a9b6af73eeb30ac141d56bc69ef97",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/f97525773b6fecb8a7704c14fb4c9f5dfdb1b9dc"
        },
        "date": 1719231605036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 148703.078313253,
            "unit": "ns",
            "range": "± 41094.56548727951"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 22011.836734693876,
            "unit": "ns",
            "range": "± 8214.214685586485"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 323760.0101010101,
            "unit": "ns",
            "range": "± 93067.01451691535"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7872452.851851852,
            "unit": "ns",
            "range": "± 220266.49948706425"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1369.520202020202,
            "unit": "ns",
            "range": "± 275.32400133327076"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 76784.51020408163,
            "unit": "ns",
            "range": "± 46260.42138754794"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 16082430.24074074,
            "unit": "ns",
            "range": "± 435311.9381577549"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 34879.71428571428,
            "unit": "ns",
            "range": "± 1400.4552682372018"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1383.2164948453608,
            "unit": "ns",
            "range": "± 175.05327919927478"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 78212.42857142857,
            "unit": "ns",
            "range": "± 516.9515249236423"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2534.1054731515737,
            "unit": "ns",
            "range": "± 13.723765872490082"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 162576.33585030693,
            "unit": "ns",
            "range": "± 1071.4691657882006"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.079585475581032,
            "unit": "ns",
            "range": "± 0.06480440595891153"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1505.910587174552,
            "unit": "ns",
            "range": "± 9.347065057097717"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.29178530772527,
            "unit": "ns",
            "range": "± 0.07192693245118238"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 21434.978729248047,
            "unit": "ns",
            "range": "± 122.68565981965575"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21473.75294117647,
            "unit": "ns",
            "range": "± 1165.204211673628"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 28054.85714285714,
            "unit": "ns",
            "range": "± 480.5795551115432"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 181658.60606060605,
            "unit": "ns",
            "range": "± 26844.919494186433"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5222774.214285715,
            "unit": "ns",
            "range": "± 13560.92516941781"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 907811.7333333333,
            "unit": "ns",
            "range": "± 9116.8223824083"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445478.0833333333,
            "unit": "ns",
            "range": "± 436.6126759358674"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 262707.10204081633,
            "unit": "ns",
            "range": "± 28716.83072765911"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 579737.5,
            "unit": "ns",
            "range": "± 3486.141628583878"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 964089.1538461539,
            "unit": "ns",
            "range": "± 2037.3726073120845"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 803685.5,
            "unit": "ns",
            "range": "± 7787.756008879975"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 210795.74226804124,
            "unit": "ns",
            "range": "± 31160.331792560646"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3660328.3333333335,
            "unit": "ns",
            "range": "± 14106.423170551303"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 33883.58163265306,
            "unit": "ns",
            "range": "± 4815.120744808155"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 39419.92307692308,
            "unit": "ns",
            "range": "± 304.22564584489515"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 516581.5,
            "unit": "ns",
            "range": "± 5602.8052829329645"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 598840780.1333333,
            "unit": "ns",
            "range": "± 3209062.3687836844"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 86180357.71428572,
            "unit": "ns",
            "range": "± 1116170.8447889306"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38828437.25,
            "unit": "ns",
            "range": "± 443125.29115243675"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1076148.543478261,
            "unit": "ns",
            "range": "± 26914.824751558663"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 1619563.4038461538,
            "unit": "ns",
            "range": "± 22463.647032710003"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93057478.96153846,
            "unit": "ns",
            "range": "± 244268.25645814594"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 78163775.57142857,
            "unit": "ns",
            "range": "± 1210043.538361881"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 526154.8333333334,
            "unit": "ns",
            "range": "± 2590.57351787498"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 409002246.8,
            "unit": "ns",
            "range": "± 2779995.6847748677"
          }
        ]
      }
    ]
  }
}