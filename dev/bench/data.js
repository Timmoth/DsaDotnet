window.BENCHMARK_DATA = {
  "lastUpdate": 1703455305863,
  "repoUrl": "https://github.com/Timmoth/DsaDotnet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30b3214ba6fe7e188802394a46213158ab22154b",
          "message": "Merge pull request #6 from Timmoth/feature/djikstras\n\nAdded basic Dijkstras implementation",
          "timestamp": "2023-12-23T10:29:43Z",
          "tree_id": "0b71db4a2f8f2a7d087dfe285b8110d461affbe5",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/30b3214ba6fe7e188802394a46213158ab22154b"
        },
        "date": 1703327576899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 100)",
            "value": 63132.316326530614,
            "unit": "ns",
            "range": "± 14109.554167883256"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 100)",
            "value": 15229.3,
            "unit": "ns",
            "range": "± 5344.818823171208"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 67724.55208333333,
            "unit": "ns",
            "range": "± 10190.050374205108"
          },
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 1000)",
            "value": 2338343.419354839,
            "unit": "ns",
            "range": "± 69984.647180542"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 1000)",
            "value": 44913.59375,
            "unit": "ns",
            "range": "± 24222.45247115647"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 286515.6041666667,
            "unit": "ns",
            "range": "± 34082.97620945534"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2544.9171810150146,
            "unit": "ns",
            "range": "± 30.571265290443716"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 160062.79944661458,
            "unit": "ns",
            "range": "± 650.9128393016075"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.005071608225505,
            "unit": "ns",
            "range": "± 0.018537264938692816"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1548.9753752390543,
            "unit": "ns",
            "range": "± 11.210116215887535"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.348386115261487,
            "unit": "ns",
            "range": "± 0.08052315652030395"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18236.262772623697,
            "unit": "ns",
            "range": "± 104.46319622021502"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21505.79761904762,
            "unit": "ns",
            "range": "± 1100.730620227999"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21312.384615384617,
            "unit": "ns",
            "range": "± 339.1279351664448"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 179704.06,
            "unit": "ns",
            "range": "± 30766.938856874054"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5093996.692307692,
            "unit": "ns",
            "range": "± 20702.297768543373"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 913602.5416666666,
            "unit": "ns",
            "range": "± 22979.590630892573"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445953.0714285714,
            "unit": "ns",
            "range": "± 1150.3444610728036"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 243326.6923076923,
            "unit": "ns",
            "range": "± 2883.0414028884893"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 580968.5,
            "unit": "ns",
            "range": "± 5051.767440483308"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 964884,
            "unit": "ns",
            "range": "± 5229.746647783237"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 804693.6923076923,
            "unit": "ns",
            "range": "± 9449.599377615747"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 204806.18,
            "unit": "ns",
            "range": "± 25772.737894397895"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3506839.75,
            "unit": "ns",
            "range": "± 9923.536201878844"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 31225.76923076923,
            "unit": "ns",
            "range": "± 295.7843115757815"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 29768.073170731706,
            "unit": "ns",
            "range": "± 1004.5174062763647"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 458309.75,
            "unit": "ns",
            "range": "± 2720.7968126000414"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 511817268.4166667,
            "unit": "ns",
            "range": "± 497152.0585848702"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85318333.71428572,
            "unit": "ns",
            "range": "± 889377.1352307731"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38657285,
            "unit": "ns",
            "range": "± 241454.72773624005"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1060411.4,
            "unit": "ns",
            "range": "± 13867.48782378615"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6693576.066666666,
            "unit": "ns",
            "range": "± 15038.96298888166"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 92932318.42857143,
            "unit": "ns",
            "range": "± 108840.29309371265"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77493490.71428572,
            "unit": "ns",
            "range": "± 136107.0837366546"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 495343.76923076925,
            "unit": "ns",
            "range": "± 4529.774978845457"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 349532081.15384614,
            "unit": "ns",
            "range": "± 2300241.0585580966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e097fc3d31e1b46f07df96266b6df719e8ffa295",
          "message": "Merge pull request #7 from Timmoth/feature/directional-graphs\n\nAdded weighted / unweighted graphs",
          "timestamp": "2023-12-23T14:15:47Z",
          "tree_id": "854d7e747aecfb968fcfde4ccddfbdff45d4539a",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/e097fc3d31e1b46f07df96266b6df719e8ffa295"
        },
        "date": 1703341157149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 100)",
            "value": 150457.20786516854,
            "unit": "ns",
            "range": "± 37708.71731088011"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 100)",
            "value": 28370.80808080808,
            "unit": "ns",
            "range": "± 12812.812834350514"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 123685.79591836735,
            "unit": "ns",
            "range": "± 26670.731182969284"
          },
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7811162.088235294,
            "unit": "ns",
            "range": "± 252252.26437369926"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 1000)",
            "value": 76065.49494949495,
            "unit": "ns",
            "range": "± 48654.93063135863"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 507427.4659090909,
            "unit": "ns",
            "range": "± 71058.00827597303"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2537.370718129476,
            "unit": "ns",
            "range": "± 22.709983305235525"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 161592.54056803384,
            "unit": "ns",
            "range": "± 973.5985185893336"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.047852222124735,
            "unit": "ns",
            "range": "± 0.06720616914501368"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1557.3000094549996,
            "unit": "ns",
            "range": "± 7.976091879363537"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.313178437948228,
            "unit": "ns",
            "range": "± 0.07094646534330186"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18136.65327671596,
            "unit": "ns",
            "range": "± 87.36341117702402"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 23471.625,
            "unit": "ns",
            "range": "± 425.80040316248335"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 18064.70879120879,
            "unit": "ns",
            "range": "± 1624.9453564589217"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 195203.33333333334,
            "unit": "ns",
            "range": "± 40191.18333360068"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5926768.02631579,
            "unit": "ns",
            "range": "± 54335.084599965245"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 909242.8076923077,
            "unit": "ns",
            "range": "± 1721.8805797061625"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445365.3846153846,
            "unit": "ns",
            "range": "± 371.78859101679865"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 235608.85714285713,
            "unit": "ns",
            "range": "± 3662.204356293181"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 577731.2307692308,
            "unit": "ns",
            "range": "± 6326.811099780654"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 972558.5,
            "unit": "ns",
            "range": "± 16352.06728403288"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 822714.4210526316,
            "unit": "ns",
            "range": "± 16559.43850469101"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 207522.16326530612,
            "unit": "ns",
            "range": "± 27270.001090543148"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3507776.769230769,
            "unit": "ns",
            "range": "± 31476.5688096025"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 31381.928571428572,
            "unit": "ns",
            "range": "± 266.31227022937804"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 29665.102564102563,
            "unit": "ns",
            "range": "± 1543.7909116698345"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 474600.5,
            "unit": "ns",
            "range": "± 3526.644542234548"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 557175658.25,
            "unit": "ns",
            "range": "± 606487.5919475899"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85740303,
            "unit": "ns",
            "range": "± 664181.7952984208"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38635908.5,
            "unit": "ns",
            "range": "± 93597.85317804283"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1055466.7333333334,
            "unit": "ns",
            "range": "± 11976.262715809771"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6707104.333333333,
            "unit": "ns",
            "range": "± 20309.511676153357"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93008308.92857143,
            "unit": "ns",
            "range": "± 178898.27409386524"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77523016.3076923,
            "unit": "ns",
            "range": "± 133550.58417717274"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 502839.4166666667,
            "unit": "ns",
            "range": "± 2512.7782327475097"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348578305.5833333,
            "unit": "ns",
            "range": "± 221517.83541920636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d725e654cb674aa50a1b1120851b9d433530b13",
          "message": "Merge pull request #8 from Timmoth/feature/directional-graphs\n\nSwapped WeightedNode Sorted list for normal List",
          "timestamp": "2023-12-23T14:23:54Z",
          "tree_id": "e8d93649f72c7cd10c36e8522036c3cc475add40",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/0d725e654cb674aa50a1b1120851b9d433530b13"
        },
        "date": 1703341638426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 100)",
            "value": 145823.79166666666,
            "unit": "ns",
            "range": "± 36307.55049469131"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 100)",
            "value": 23586.843434343435,
            "unit": "ns",
            "range": "± 12592.114986769815"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 81088.23958333333,
            "unit": "ns",
            "range": "± 14315.473182425116"
          },
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7748703.166666667,
            "unit": "ns",
            "range": "± 231436.76016244377"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 1000)",
            "value": 71323.61616161616,
            "unit": "ns",
            "range": "± 46058.091453521614"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 392874.65591397847,
            "unit": "ns",
            "range": "± 63213.47152007592"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2512.8400815327964,
            "unit": "ns",
            "range": "± 21.73076956279778"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 159954.99466145833,
            "unit": "ns",
            "range": "± 1318.8288697482012"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.159708688656488,
            "unit": "ns",
            "range": "± 0.2923927564286251"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1549.041497929891,
            "unit": "ns",
            "range": "± 7.135644971906206"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.275953663246973,
            "unit": "ns",
            "range": "± 0.026811310368225216"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18494.51090698242,
            "unit": "ns",
            "range": "± 264.1907368255856"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21383.40625,
            "unit": "ns",
            "range": "± 997.2624229749047"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 28913.076923076922,
            "unit": "ns",
            "range": "± 372.42526354032015"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 191329.5612244898,
            "unit": "ns",
            "range": "± 30304.96366340905"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5067187.428571428,
            "unit": "ns",
            "range": "± 8479.210401503611"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 899515.8333333334,
            "unit": "ns",
            "range": "± 2366.503551783952"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 455329.3846153846,
            "unit": "ns",
            "range": "± 933.2686767897673"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 244555.76923076922,
            "unit": "ns",
            "range": "± 3756.4799825068094"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 569086.6153846154,
            "unit": "ns",
            "range": "± 3064.3797506853257"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 968239.3571428572,
            "unit": "ns",
            "range": "± 9036.880210535073"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 799747.1153846154,
            "unit": "ns",
            "range": "± 2080.4352725035506"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 203991.0303030303,
            "unit": "ns",
            "range": "± 27657.641571453467"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3973514.378378378,
            "unit": "ns",
            "range": "± 110654.43185238935"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29134.185714285715,
            "unit": "ns",
            "range": "± 960.0264632206936"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 32730.13,
            "unit": "ns",
            "range": "± 3294.2383483987014"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 462312.75,
            "unit": "ns",
            "range": "± 3323.550897486274"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 514901177.6666667,
            "unit": "ns",
            "range": "± 3961371.0519564105"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85389759.92857143,
            "unit": "ns",
            "range": "± 716843.7158412902"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38593061.73076923,
            "unit": "ns",
            "range": "± 64696.63613505966"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1033437.4615384615,
            "unit": "ns",
            "range": "± 6095.739722890961"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6686756.733333333,
            "unit": "ns",
            "range": "± 13955.247320665887"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93117983.57692307,
            "unit": "ns",
            "range": "± 246083.68682234286"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77385370.92307693,
            "unit": "ns",
            "range": "± 36189.38909510525"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 506680.92307692306,
            "unit": "ns",
            "range": "± 4185.221210034551"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 349536981.2307692,
            "unit": "ns",
            "range": "± 1751021.3871782164"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b749b6aa2418f46aac89343e4aa1196b4eab90ef",
          "message": "Merge pull request #9 from Timmoth/features/lcm\n\nAdded GCD and LCM",
          "timestamp": "2023-12-23T15:51:44Z",
          "tree_id": "cce099e631908e73507784359c0f2073c3f8d24b",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/b749b6aa2418f46aac89343e4aa1196b4eab90ef"
        },
        "date": 1703346907420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 100)",
            "value": 148150.60638297873,
            "unit": "ns",
            "range": "± 38275.126332771724"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 100)",
            "value": 27336.41414141414,
            "unit": "ns",
            "range": "± 14947.888859205"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 79902.44791666667,
            "unit": "ns",
            "range": "± 15984.573810804226"
          },
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7717408.24,
            "unit": "ns",
            "range": "± 198895.84457371148"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 1000)",
            "value": 65102.878787878784,
            "unit": "ns",
            "range": "± 43783.32132852173"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 386134.73913043475,
            "unit": "ns",
            "range": "± 59044.731999173964"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2507.1096333821615,
            "unit": "ns",
            "range": "± 14.149818630285804"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 158770.98429361978,
            "unit": "ns",
            "range": "± 917.8711246582704"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.031382381916046,
            "unit": "ns",
            "range": "± 0.01949231158475542"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1541.6099617004395,
            "unit": "ns",
            "range": "± 8.87757352882093"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.762301288048427,
            "unit": "ns",
            "range": "± 0.02600381473103933"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18052.30367635091,
            "unit": "ns",
            "range": "± 151.51069240522378"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 31130.20338983051,
            "unit": "ns",
            "range": "± 1252.8782556324404"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 19706.061855670105,
            "unit": "ns",
            "range": "± 3478.6634341080894"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 178580.9696969697,
            "unit": "ns",
            "range": "± 29604.99777528419"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5062400.714285715,
            "unit": "ns",
            "range": "± 4808.632180833698"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 909705.2272727273,
            "unit": "ns",
            "range": "± 20664.16232660238"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445655.75,
            "unit": "ns",
            "range": "± 1465.2644269581824"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 260937.7142857143,
            "unit": "ns",
            "range": "± 28750.631401045142"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 570910.6923076923,
            "unit": "ns",
            "range": "± 3731.5849488882377"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 963308.75,
            "unit": "ns",
            "range": "± 1412.6605540288476"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 806141.9166666666,
            "unit": "ns",
            "range": "± 5712.036676389976"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 204579.24,
            "unit": "ns",
            "range": "± 28975.723807422663"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3935337.6153846155,
            "unit": "ns",
            "range": "± 4538.7019719016125"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29347.71794871795,
            "unit": "ns",
            "range": "± 1035.7725555229918"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 29415.06,
            "unit": "ns",
            "range": "± 1161.671006326135"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 455158.5,
            "unit": "ns",
            "range": "± 4305.959517185033"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 511614476.64285713,
            "unit": "ns",
            "range": "± 369236.0442894964"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85418931.61538461,
            "unit": "ns",
            "range": "± 788203.4807463043"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38734881.384615384,
            "unit": "ns",
            "range": "± 353862.3132162514"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1049622.923076923,
            "unit": "ns",
            "range": "± 15634.15659414528"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 1598221.2173913044,
            "unit": "ns",
            "range": "± 20353.97015699126"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93048971.93333334,
            "unit": "ns",
            "range": "± 182912.70871861515"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77561020.92307693,
            "unit": "ns",
            "range": "± 129468.65340077596"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 511667,
            "unit": "ns",
            "range": "± 3870.734978363576"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348736415.2307692,
            "unit": "ns",
            "range": "± 308738.68063924054"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "865a3a8cd27c88b0d11a9b8efed97fdaef79faaf",
          "message": "Update README.md",
          "timestamp": "2023-12-24T08:50:12Z",
          "tree_id": "c4b4192fd1a76ac9cce597ef030f1c7133dd7d6d",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/865a3a8cd27c88b0d11a9b8efed97fdaef79faaf"
        },
        "date": 1703408011374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 100)",
            "value": 153379,
            "unit": "ns",
            "range": "± 36989.52683615323"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 100)",
            "value": 26888.151515151516,
            "unit": "ns",
            "range": "± 13752.412818627561"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 84202.48979591837,
            "unit": "ns",
            "range": "± 15967.049039209258"
          },
          {
            "name": "Benchmarks.Graphs.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7808928.703703703,
            "unit": "ns",
            "range": "± 212356.77165831"
          },
          {
            "name": "Benchmarks.Graphs.DfsBenchmarks.Bfs(N: 1000)",
            "value": 62349.32474226804,
            "unit": "ns",
            "range": "± 41163.35159737824"
          },
          {
            "name": "Benchmarks.Graphs.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 379464.4285714286,
            "unit": "ns",
            "range": "± 45154.58288027055"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2501.333843231201,
            "unit": "ns",
            "range": "± 8.123507117685659"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 158680.3377278646,
            "unit": "ns",
            "range": "± 1063.4118021374802"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.047623135646184,
            "unit": "ns",
            "range": "± 0.06746864142518103"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1531.3616878069365,
            "unit": "ns",
            "range": "± 2.5459266687321693"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.315153272946677,
            "unit": "ns",
            "range": "± 0.07608837845836416"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18102.357929774695,
            "unit": "ns",
            "range": "± 81.8101775502257"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 26474.5,
            "unit": "ns",
            "range": "± 4092.56476966943"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21206.285714285714,
            "unit": "ns",
            "range": "± 365.3833452840852"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 180116.9797979798,
            "unit": "ns",
            "range": "± 30030.832222214078"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5050036.428571428,
            "unit": "ns",
            "range": "± 8181.994478631213"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 905526.2857142857,
            "unit": "ns",
            "range": "± 8692.513759008349"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445248.3333333333,
            "unit": "ns",
            "range": "± 412.9222540367471"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 260651.32,
            "unit": "ns",
            "range": "± 26172.958278885544"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 569446.5769230769,
            "unit": "ns",
            "range": "± 4048.305930911893"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 963252.5,
            "unit": "ns",
            "range": "± 1372.5613415667938"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 803680.3076923077,
            "unit": "ns",
            "range": "± 8874.49478735377"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 200461.1313131313,
            "unit": "ns",
            "range": "± 28859.41982942041"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3979103.3157894737,
            "unit": "ns",
            "range": "± 133761.6833478846"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 30518.1875,
            "unit": "ns",
            "range": "± 940.5338373464022"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 32020.5,
            "unit": "ns",
            "range": "± 631.8665470914989"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 475240.07692307694,
            "unit": "ns",
            "range": "± 3139.119448230094"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 514397951.6,
            "unit": "ns",
            "range": "± 3447483.761613033"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 86653639.68421052,
            "unit": "ns",
            "range": "± 1922764.15635035"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 39041319.4,
            "unit": "ns",
            "range": "± 538078.831601414"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1049779,
            "unit": "ns",
            "range": "± 12172.82735087809"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6692592.857142857,
            "unit": "ns",
            "range": "± 22495.43739331342"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93037286.91666667,
            "unit": "ns",
            "range": "± 206086.72439642242"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77395232.41666667,
            "unit": "ns",
            "range": "± 44111.45329000236"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 529391.5,
            "unit": "ns",
            "range": "± 16316.387699132032"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348718364.06666666,
            "unit": "ns",
            "range": "± 191032.31101587674"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f22e1b5b3463a05b0899eaf196bfe7e69515794a",
          "message": "Merge pull request #10 from Timmoth/feature/search-algorithms\n\nAdded binary and linear search",
          "timestamp": "2023-12-24T11:46:28Z",
          "tree_id": "a139138efc43adafb550e06af7fd221e13e55e98",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/f22e1b5b3463a05b0899eaf196bfe7e69515794a"
        },
        "date": 1703418595677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 143590.42682926828,
            "unit": "ns",
            "range": "± 37892.394171198044"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 29029.62626262626,
            "unit": "ns",
            "range": "± 14213.766618364887"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 83588.05494505494,
            "unit": "ns",
            "range": "± 14095.47992668622"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7887832.552631579,
            "unit": "ns",
            "range": "± 248669.0261540751"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1350.340206185567,
            "unit": "ns",
            "range": "± 115.8812149176491"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 75600.78350515464,
            "unit": "ns",
            "range": "± 42566.86162385858"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 393471.8777777778,
            "unit": "ns",
            "range": "± 61062.58887548009"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 28906.939393939392,
            "unit": "ns",
            "range": "± 4046.856675924303"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1265.5698924731182,
            "unit": "ns",
            "range": "± 108.1639654945678"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 71688.64285714286,
            "unit": "ns",
            "range": "± 4660.49696533723"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2538.728381093343,
            "unit": "ns",
            "range": "± 15.767758757261381"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 163783.19315011162,
            "unit": "ns",
            "range": "± 705.7674864723436"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.036004908879598,
            "unit": "ns",
            "range": "± 0.05847373509380159"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1550.158269064767,
            "unit": "ns",
            "range": "± 6.029338439269514"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.318058569516456,
            "unit": "ns",
            "range": "± 0.07038068970535886"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18344.357580566408,
            "unit": "ns",
            "range": "± 90.05375482305054"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 24301.444444444445,
            "unit": "ns",
            "range": "± 4514.392562528959"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21129.428571428572,
            "unit": "ns",
            "range": "± 373.7859248051183"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 182186.63,
            "unit": "ns",
            "range": "± 30304.480996675706"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5979330.371428572,
            "unit": "ns",
            "range": "± 195427.06608365144"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 900773.75,
            "unit": "ns",
            "range": "± 4391.617741375453"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 450226.5294117647,
            "unit": "ns",
            "range": "± 9239.303769208256"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 244145.25,
            "unit": "ns",
            "range": "± 3748.6130071364696"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 574863.6153846154,
            "unit": "ns",
            "range": "± 7669.430351928162"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 964388.9166666666,
            "unit": "ns",
            "range": "± 3844.316145790806"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 799250.0833333334,
            "unit": "ns",
            "range": "± 1044.927179570931"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 202142.58163265305,
            "unit": "ns",
            "range": "± 26483.080413815307"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3490351.6363636362,
            "unit": "ns",
            "range": "± 15795.974359206524"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29366.025,
            "unit": "ns",
            "range": "± 1046.8256531423572"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 38119.03125,
            "unit": "ns",
            "range": "± 1732.622518801695"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 460725.53846153844,
            "unit": "ns",
            "range": "± 4384.028429336512"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 512050118.4166667,
            "unit": "ns",
            "range": "± 553530.2008841167"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85370812.85714285,
            "unit": "ns",
            "range": "± 589317.027973759"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 39036237.21428572,
            "unit": "ns",
            "range": "± 480314.7147489187"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1049554.5714285714,
            "unit": "ns",
            "range": "± 16601.58027100148"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6781579.733333333,
            "unit": "ns",
            "range": "± 25365.03692787339"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93110469.61538461,
            "unit": "ns",
            "range": "± 204739.59415785476"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77531372.61538461,
            "unit": "ns",
            "range": "± 73164.99239793402"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 512951.57692307694,
            "unit": "ns",
            "range": "± 8087.359864438028"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 349341030.75,
            "unit": "ns",
            "range": "± 347368.54448085825"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1917f6d475ded121a7eb041ecc8df5e3248b4e8d",
          "message": "Merge pull request #11 from Timmoth/feature/binary-search-tree\n\nFeature/binary search tree",
          "timestamp": "2023-12-24T13:10:33Z",
          "tree_id": "21f6542a846881ac66f0e28e627006910eef71eb",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/1917f6d475ded121a7eb041ecc8df5e3248b4e8d"
        },
        "date": 1703423633776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 154069.8510638298,
            "unit": "ns",
            "range": "± 37052.2457319935"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 25785.367346938776,
            "unit": "ns",
            "range": "± 13040.488100715485"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 90700.98979591837,
            "unit": "ns",
            "range": "± 25288.54964004069"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7754112.689655173,
            "unit": "ns",
            "range": "± 210537.6249815328"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1299.1458333333333,
            "unit": "ns",
            "range": "± 91.60038831986948"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 69906.1530612245,
            "unit": "ns",
            "range": "± 42688.81658599138"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 399114.42391304346,
            "unit": "ns",
            "range": "± 57812.56309211575"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 26078.298507462685,
            "unit": "ns",
            "range": "± 1249.564324255572"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1436.06,
            "unit": "ns",
            "range": "± 238.81102033688364"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 70360,
            "unit": "ns",
            "range": "± 349.27727579190633"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2511.028958892822,
            "unit": "ns",
            "range": "± 13.398192494882318"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 158965.99916294642,
            "unit": "ns",
            "range": "± 1037.176410547294"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 13.995962133010229,
            "unit": "ns",
            "range": "± 0.01554119953804206"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1538.0491298039753,
            "unit": "ns",
            "range": "± 8.567425308940399"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.270657014388306,
            "unit": "ns",
            "range": "± 0.014239820102550003"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18034.823377336776,
            "unit": "ns",
            "range": "± 96.71944594330233"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 30338.44680851064,
            "unit": "ns",
            "range": "± 2260.3136837070087"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21507.928571428572,
            "unit": "ns",
            "range": "± 366.259148331156"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 181169.84,
            "unit": "ns",
            "range": "± 27553.229771531835"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5056134.076923077,
            "unit": "ns",
            "range": "± 9225.382679158793"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 903983.3333333334,
            "unit": "ns",
            "range": "± 7423.659723948134"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445102.35714285716,
            "unit": "ns",
            "range": "± 540.0514017049827"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 242965.88461538462,
            "unit": "ns",
            "range": "± 3117.267808473245"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 580556.3333333334,
            "unit": "ns",
            "range": "± 4388.12956287825"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 966260.7692307692,
            "unit": "ns",
            "range": "± 7229.40058780632"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 814729.6666666666,
            "unit": "ns",
            "range": "± 9641.027439813564"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 210766.89795918367,
            "unit": "ns",
            "range": "± 27734.16771112224"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3516190.6,
            "unit": "ns",
            "range": "± 7981.213779870828"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 31003.35714285714,
            "unit": "ns",
            "range": "± 275.53405684872513"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 32237.2,
            "unit": "ns",
            "range": "± 549.3775958820517"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 466942.23076923075,
            "unit": "ns",
            "range": "± 3361.9447782953976"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 557591167.1666666,
            "unit": "ns",
            "range": "± 455600.2241790161"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85917292.78571428,
            "unit": "ns",
            "range": "± 1005426.2850005601"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38585625,
            "unit": "ns",
            "range": "± 84770.50258590346"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1057355,
            "unit": "ns",
            "range": "± 11708.860589642885"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6700579.769230769,
            "unit": "ns",
            "range": "± 19027.907386931467"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93328226.5,
            "unit": "ns",
            "range": "± 1129826.7953713888"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77473883,
            "unit": "ns",
            "range": "± 112213.14516511046"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 499708.25,
            "unit": "ns",
            "range": "± 5848.540627991972"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 352038936.8,
            "unit": "ns",
            "range": "± 3376363.44704115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3f9ceb74bc830f9ee3cf1c6c86a658138ccb600",
          "message": "Update README.md",
          "timestamp": "2023-12-24T18:12:08Z",
          "tree_id": "ff9f7df22b51444eecdae803a972f00f4807264b",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/f3f9ceb74bc830f9ee3cf1c6c86a658138ccb600"
        },
        "date": 1703441729621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 141477.16326530612,
            "unit": "ns",
            "range": "± 35190.31031514446"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 23775.65306122449,
            "unit": "ns",
            "range": "± 11171.174840016945"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 94324.37755102041,
            "unit": "ns",
            "range": "± 25015.154334145933"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7795538,
            "unit": "ns",
            "range": "± 233167.43923745383"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1476.69,
            "unit": "ns",
            "range": "± 258.7568452224887"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 75382.25757575757,
            "unit": "ns",
            "range": "± 47551.35608274466"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 396428.3296703297,
            "unit": "ns",
            "range": "± 59795.617158052075"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 29069.32,
            "unit": "ns",
            "range": "± 3739.7236053003166"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1208.2857142857142,
            "unit": "ns",
            "range": "± 53.825955165490114"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 69874.42857142857,
            "unit": "ns",
            "range": "± 248.16703874785455"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2491.7025230407717,
            "unit": "ns",
            "range": "± 19.48879175165194"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 157183.26298828126,
            "unit": "ns",
            "range": "± 843.8347505832843"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 13.998349104936306,
            "unit": "ns",
            "range": "± 0.015632520981955295"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1538.0385906219483,
            "unit": "ns",
            "range": "± 8.068066329309941"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.316090512275697,
            "unit": "ns",
            "range": "± 0.07316300962704603"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18036.564350673132,
            "unit": "ns",
            "range": "± 59.982486258400876"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21879.933333333334,
            "unit": "ns",
            "range": "± 1625.383887585475"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 20739.0206185567,
            "unit": "ns",
            "range": "± 3550.634843409994"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 173795.27380952382,
            "unit": "ns",
            "range": "± 28859.42672173613"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5071279.571428572,
            "unit": "ns",
            "range": "± 14376.562242677575"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 905523.3571428572,
            "unit": "ns",
            "range": "± 11027.121987362607"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445949.9285714286,
            "unit": "ns",
            "range": "± 506.6859844254494"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 236233.26666666666,
            "unit": "ns",
            "range": "± 4419.318329249217"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 568763.4166666666,
            "unit": "ns",
            "range": "± 4151.477578324774"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 968659.7142857143,
            "unit": "ns",
            "range": "± 11721.146665017768"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 800884.6666666666,
            "unit": "ns",
            "range": "± 5670.376856697418"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 203484.92857142858,
            "unit": "ns",
            "range": "± 30530.38567507905"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3951706.447368421,
            "unit": "ns",
            "range": "± 8761.892334128159"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 30886.214285714286,
            "unit": "ns",
            "range": "± 290.81911601845957"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 30939.065217391304,
            "unit": "ns",
            "range": "± 1195.6737273683152"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 462081.8076923077,
            "unit": "ns",
            "range": "± 5024.46155298614"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 514361934.35714287,
            "unit": "ns",
            "range": "± 3517064.780191674"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85901343.3076923,
            "unit": "ns",
            "range": "± 936886.9502791666"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38564347.071428575,
            "unit": "ns",
            "range": "± 45647.135937561274"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1050736.5,
            "unit": "ns",
            "range": "± 23627.29862167689"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6715113.071428572,
            "unit": "ns",
            "range": "± 21599.348460487934"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93949699.35714285,
            "unit": "ns",
            "range": "± 1466174.563219936"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77600827.8076923,
            "unit": "ns",
            "range": "± 193908.36313509216"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 501660.3076923077,
            "unit": "ns",
            "range": "± 5552.538254177323"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 349177628.4,
            "unit": "ns",
            "range": "± 354594.03785471956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "t.jones@timmoth.com",
            "name": "Tim Jones",
            "username": "Timmoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24278431e595e604b558eb676e02beef30dd4a23",
          "message": "Merge pull request #12 from Timmoth/techdebt/tests\n\nAdded tests",
          "timestamp": "2023-12-24T20:04:54Z",
          "tree_id": "ef1a055f3ebce71e0387f548e58d8e73de875add",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/24278431e595e604b558eb676e02beef30dd4a23"
        },
        "date": 1703448605872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 220091.37373737374,
            "unit": "ns",
            "range": "± 98351.70344380249"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 21811.061855670105,
            "unit": "ns",
            "range": "± 10240.746763150008"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 91060.8686868687,
            "unit": "ns",
            "range": "± 25389.12184487698"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7758755.964285715,
            "unit": "ns",
            "range": "± 214912.48718601753"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1565.4285714285713,
            "unit": "ns",
            "range": "± 191.30889363410463"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 74377,
            "unit": "ns",
            "range": "± 45883.96503545656"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 387949.6304347826,
            "unit": "ns",
            "range": "± 58845.230970782824"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 35632.444444444445,
            "unit": "ns",
            "range": "± 1353.1071239517178"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1242.142857142857,
            "unit": "ns",
            "range": "± 42.305515169497866"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 77733.35714285714,
            "unit": "ns",
            "range": "± 963.6382066971988"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2527.375214168004,
            "unit": "ns",
            "range": "± 22.359289829877838"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 160020.49581473213,
            "unit": "ns",
            "range": "± 1016.0145759782154"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.081899127789907,
            "unit": "ns",
            "range": "± 0.13571415436532472"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1568.5814819335938,
            "unit": "ns",
            "range": "± 3.874604227918288"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.316361101468406,
            "unit": "ns",
            "range": "± 0.04739680185816361"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18512.858048502603,
            "unit": "ns",
            "range": "± 197.52289556982757"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21790.94578313253,
            "unit": "ns",
            "range": "± 1167.7535056994968"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 18338.026315789473,
            "unit": "ns",
            "range": "± 1653.8381847452272"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 181349.72340425532,
            "unit": "ns",
            "range": "± 27108.955157855667"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5050214,
            "unit": "ns",
            "range": "± 7251.440970858561"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 899551.4615384615,
            "unit": "ns",
            "range": "± 1892.0958668182668"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445789.07692307694,
            "unit": "ns",
            "range": "± 754.4459845408044"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 236801.85714285713,
            "unit": "ns",
            "range": "± 3913.336680892915"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 583389.5833333334,
            "unit": "ns",
            "range": "± 8211.221661497297"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 968894.5,
            "unit": "ns",
            "range": "± 10289.104855660147"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 805929.7857142857,
            "unit": "ns",
            "range": "± 11698.932003711814"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 203205.42,
            "unit": "ns",
            "range": "± 31926.418033473168"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3492621.3125,
            "unit": "ns",
            "range": "± 23679.840156326365"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29125.119047619046,
            "unit": "ns",
            "range": "± 1347.0113445001055"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 35006.378787878784,
            "unit": "ns",
            "range": "± 3649.766277875459"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 463865.2,
            "unit": "ns",
            "range": "± 8604.440956356699"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 512719534.06666666,
            "unit": "ns",
            "range": "± 1806785.2076565425"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 86356895,
            "unit": "ns",
            "range": "± 1095563.740233082"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38627658.14285714,
            "unit": "ns",
            "range": "± 88810.54257398563"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1060166.4615384615,
            "unit": "ns",
            "range": "± 6383.008559388807"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6709222.466666667,
            "unit": "ns",
            "range": "± 111665.75455916047"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93151149.07142857,
            "unit": "ns",
            "range": "± 307768.1500266729"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77450131.14285715,
            "unit": "ns",
            "range": "± 60843.779785557424"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 501559.1538461539,
            "unit": "ns",
            "range": "± 3699.742442525647"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 350890293.46666664,
            "unit": "ns",
            "range": "± 2033942.7071206472"
          }
        ]
      },
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
          "id": "014f751cae76d804434b49ef14991737377b35b8",
          "message": "Added stryker step to CI",
          "timestamp": "2023-12-24T21:26:52Z",
          "tree_id": "a343633917c66a6b778d05210e281697473a01a1",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/014f751cae76d804434b49ef14991737377b35b8"
        },
        "date": 1703453518133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 177841.29,
            "unit": "ns",
            "range": "± 65233.19419509402"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 19339.51020408163,
            "unit": "ns",
            "range": "± 8127.829719448386"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 86383.0808080808,
            "unit": "ns",
            "range": "± 13783.108870507429"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7922118.035714285,
            "unit": "ns",
            "range": "± 221121.23493894615"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1114.1949152542372,
            "unit": "ns",
            "range": "± 60.94379950280028"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 73777.95833333333,
            "unit": "ns",
            "range": "± 44641.23072815714"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 391203.9010989011,
            "unit": "ns",
            "range": "± 58674.96360384326"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 26729.08,
            "unit": "ns",
            "range": "± 558.7221223470573"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1295.8666666666666,
            "unit": "ns",
            "range": "± 60.1844135666672"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 79760,
            "unit": "ns",
            "range": "± 911.523920225277"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2561.832982635498,
            "unit": "ns",
            "range": "± 23.996767562752304"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 163364.53219401042,
            "unit": "ns",
            "range": "± 1724.446207771256"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.125611690183481,
            "unit": "ns",
            "range": "± 0.24183574688736703"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1572.2775496164957,
            "unit": "ns",
            "range": "± 10.647816844240648"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.32229484717051,
            "unit": "ns",
            "range": "± 0.06992858010460333"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18786.85714518229,
            "unit": "ns",
            "range": "± 192.98685270207247"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 27014.555555555555,
            "unit": "ns",
            "range": "± 4827.393221051875"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21137.333333333332,
            "unit": "ns",
            "range": "± 385.6559656086287"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 230019.06565656565,
            "unit": "ns",
            "range": "± 70187.93532878415"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5090435.2,
            "unit": "ns",
            "range": "± 12201.127999375421"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 907388.1052631579,
            "unit": "ns",
            "range": "± 19065.62191745696"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445369.92307692306,
            "unit": "ns",
            "range": "± 570.1595480708977"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 236431.92307692306,
            "unit": "ns",
            "range": "± 3069.8832893542403"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 570240.6666666666,
            "unit": "ns",
            "range": "± 4220.33702517472"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 966821.3076923077,
            "unit": "ns",
            "range": "± 8442.644978368404"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 813125.2142857143,
            "unit": "ns",
            "range": "± 9590.893294230662"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 203716.18181818182,
            "unit": "ns",
            "range": "± 30732.777292152656"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3504575.6153846155,
            "unit": "ns",
            "range": "± 6942.624162116962"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29468.511627906977,
            "unit": "ns",
            "range": "± 1098.4016823612176"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 32307.966666666667,
            "unit": "ns",
            "range": "± 524.874116427204"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 466907.75,
            "unit": "ns",
            "range": "± 1888.2360274749938"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 511745049.4166667,
            "unit": "ns",
            "range": "± 441660.1375495248"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 86032857.96666667,
            "unit": "ns",
            "range": "± 811606.9436995143"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38647012.9,
            "unit": "ns",
            "range": "± 136167.67795300868"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1042016.1333333333,
            "unit": "ns",
            "range": "± 7828.022573391304"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6675994.142857143,
            "unit": "ns",
            "range": "± 14265.264482204764"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93440579.5,
            "unit": "ns",
            "range": "± 498717.75165221305"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 78419662.92857143,
            "unit": "ns",
            "range": "± 1327662.789619787"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 512765.46153846156,
            "unit": "ns",
            "range": "± 5228.6207329687595"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348688915.75,
            "unit": "ns",
            "range": "± 274910.6561978157"
          }
        ]
      },
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
          "id": "a37333b3eeabcf256b8cf691740a0325efe99480",
          "message": "Updated main-ci workflow",
          "timestamp": "2023-12-24T21:41:17Z",
          "tree_id": "4efc9eb078c02fdfe464fb6abc5ad7549963c6ef",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/a37333b3eeabcf256b8cf691740a0325efe99480"
        },
        "date": 1703454388175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 143138.8260869565,
            "unit": "ns",
            "range": "± 36289.38209182935"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 22388.18,
            "unit": "ns",
            "range": "± 9206.438700335235"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 93075.32323232324,
            "unit": "ns",
            "range": "± 25271.700992970935"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7779251.361111111,
            "unit": "ns",
            "range": "± 258999.4504655122"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1310.3,
            "unit": "ns",
            "range": "± 291.6308203080315"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 69882.80927835051,
            "unit": "ns",
            "range": "± 45665.36838407581"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 395554.9651162791,
            "unit": "ns",
            "range": "± 67195.6061964222"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 26664.863636363636,
            "unit": "ns",
            "range": "± 424.7656267429577"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1514,
            "unit": "ns",
            "range": "± 350.12794198346376"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 78785.5,
            "unit": "ns",
            "range": "± 763.2856860059269"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2485.9346967424667,
            "unit": "ns",
            "range": "± 28.869194986371873"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 156407.24684244793,
            "unit": "ns",
            "range": "± 1445.3523959722122"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 13.647880288107055,
            "unit": "ns",
            "range": "± 0.19322714357891566"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1539.6631150563558,
            "unit": "ns",
            "range": "± 10.381198843167462"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.195308943589527,
            "unit": "ns",
            "range": "± 0.12139105138949786"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18037.56953547551,
            "unit": "ns",
            "range": "± 95.77178207413526"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 27389.571428571428,
            "unit": "ns",
            "range": "± 3657.566421661538"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 22712.87,
            "unit": "ns",
            "range": "± 2989.366426083284"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 145852.07692307694,
            "unit": "ns",
            "range": "± 996.1918708711407"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5071596.357142857,
            "unit": "ns",
            "range": "± 9461.00777570065"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 903848.5833333334,
            "unit": "ns",
            "range": "± 6462.298387336327"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 443423.75,
            "unit": "ns",
            "range": "± 8693.412889462152"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 234092.75,
            "unit": "ns",
            "range": "± 3427.4651679153103"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 572684.0714285715,
            "unit": "ns",
            "range": "± 6446.368145222258"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 973845.7333333333,
            "unit": "ns",
            "range": "± 13944.168291883921"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 812941.8846153846,
            "unit": "ns",
            "range": "± 8845.226891177537"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 203046.8282828283,
            "unit": "ns",
            "range": "± 27582.2299808248"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3972180.205128205,
            "unit": "ns",
            "range": "± 109877.42781370893"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 30922.666666666668,
            "unit": "ns",
            "range": "± 491.50013321705313"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 39987.6,
            "unit": "ns",
            "range": "± 187.91555854387667"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 458568.46153846156,
            "unit": "ns",
            "range": "± 2535.4412047144974"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 512561737.8,
            "unit": "ns",
            "range": "± 2840116.983802609"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 86018947.86666666,
            "unit": "ns",
            "range": "± 686138.7958277691"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38599171.416666664,
            "unit": "ns",
            "range": "± 70853.99667621033"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1049637.6153846155,
            "unit": "ns",
            "range": "± 8476.312411051376"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6764185.5,
            "unit": "ns",
            "range": "± 26762.469369076713"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93096872.33333333,
            "unit": "ns",
            "range": "± 384166.1225292406"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77422449.91666667,
            "unit": "ns",
            "range": "± 82396.11628806336"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 502453.46153846156,
            "unit": "ns",
            "range": "± 3273.457464093702"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348546469.8666667,
            "unit": "ns",
            "range": "± 253454.94169853846"
          }
        ]
      },
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
          "id": "ec26b72e6bfc6c8b4b7720abe34ed940f7eab770",
          "message": "Removed package info",
          "timestamp": "2023-12-24T21:50:16Z",
          "tree_id": "c42a6388ea7e70763f5dd46b7c38ee759b18c982",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/ec26b72e6bfc6c8b4b7720abe34ed940f7eab770"
        },
        "date": 1703454926463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 174216.14141414143,
            "unit": "ns",
            "range": "± 73205.57559199509"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 21145.45,
            "unit": "ns",
            "range": "± 8692.834079332702"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 93925.45833333333,
            "unit": "ns",
            "range": "± 23552.13818426847"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7790586.361111111,
            "unit": "ns",
            "range": "± 255355.55426459824"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1413.979797979798,
            "unit": "ns",
            "range": "± 210.42764910078054"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 72272.74226804124,
            "unit": "ns",
            "range": "± 46138.36137511603"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 386396.6222222222,
            "unit": "ns",
            "range": "± 57259.48690540535"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 34816.892857142855,
            "unit": "ns",
            "range": "± 1485.6370495033914"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1328.0714285714287,
            "unit": "ns",
            "range": "± 90.61470850157494"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 72097.93939393939,
            "unit": "ns",
            "range": "± 5431.3419186335295"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2494.452738080706,
            "unit": "ns",
            "range": "± 15.376659213780746"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 158215.77458844866,
            "unit": "ns",
            "range": "± 548.8011046417546"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.012556108335653,
            "unit": "ns",
            "range": "± 0.07022960048727388"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1548.2820804595947,
            "unit": "ns",
            "range": "± 11.825053219954883"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.277073511055537,
            "unit": "ns",
            "range": "± 0.06942352663450396"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18092.139534505208,
            "unit": "ns",
            "range": "± 115.10473636771555"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 21620.127906976744,
            "unit": "ns",
            "range": "± 1164.691373374096"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 21962.87,
            "unit": "ns",
            "range": "± 3224.6075594128074"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 227251.61,
            "unit": "ns",
            "range": "± 68454.11279583242"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5058227.785714285,
            "unit": "ns",
            "range": "± 10799.386593538695"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 913817.1428571428,
            "unit": "ns",
            "range": "± 9763.92116106846"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445552.3333333333,
            "unit": "ns",
            "range": "± 1342.9019684882799"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 236269.5,
            "unit": "ns",
            "range": "± 3417.9461004314485"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 570768.5384615385,
            "unit": "ns",
            "range": "± 7563.87300060166"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 972649.2,
            "unit": "ns",
            "range": "± 14886.114743996453"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 803251.4285714285,
            "unit": "ns",
            "range": "± 13786.92880657554"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 201136.07575757575,
            "unit": "ns",
            "range": "± 28545.270408881068"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3508139.4615384615,
            "unit": "ns",
            "range": "± 10794.238514252133"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 29600.41176470588,
            "unit": "ns",
            "range": "± 888.5132071338821"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 29678.19230769231,
            "unit": "ns",
            "range": "± 1049.6488589040107"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 459795.5,
            "unit": "ns",
            "range": "± 4014.9827665115345"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 513113070.28571427,
            "unit": "ns",
            "range": "± 3651180.3633607295"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85170599.92857143,
            "unit": "ns",
            "range": "± 999258.5438619719"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38543043.71428572,
            "unit": "ns",
            "range": "± 51514.24820740012"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1044908.4666666667,
            "unit": "ns",
            "range": "± 6744.112626862746"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6735497.5,
            "unit": "ns",
            "range": "± 14574.69841751583"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 93833670.07692307,
            "unit": "ns",
            "range": "± 1264672.1239909353"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77526514.42857143,
            "unit": "ns",
            "range": "± 140298.052529778"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 511969.92307692306,
            "unit": "ns",
            "range": "± 2921.168015866783"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348735319.85714287,
            "unit": "ns",
            "range": "± 1995801.4180782638"
          }
        ]
      },
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
          "id": "b5f648dbdc37b1bc48a0f31f72fc96d76bf3caad",
          "message": "updated package info",
          "timestamp": "2023-12-24T21:56:33Z",
          "tree_id": "8c1712e04a47719b5e1d750ea39ab171f092b6a4",
          "url": "https://github.com/Timmoth/DsaDotnet/commit/b5f648dbdc37b1bc48a0f31f72fc96d76bf3caad"
        },
        "date": 1703455305332,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 100)",
            "value": 140120.7659574468,
            "unit": "ns",
            "range": "± 35600.02764086928"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 100)",
            "value": 19000.378787878788,
            "unit": "ns",
            "range": "± 7661.196990816545"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 100)",
            "value": 84078.25510204081,
            "unit": "ns",
            "range": "± 14913.277198185588"
          },
          {
            "name": "Benchmarks.Search.BfsBenchmarks.Bfs(N: 1000)",
            "value": 7810610.471428571,
            "unit": "ns",
            "range": "± 255408.0155684563"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 1000)",
            "value": 1486.82,
            "unit": "ns",
            "range": "± 273.4680333284408"
          },
          {
            "name": "Benchmarks.Search.DfsBenchmarks.Bfs(N: 1000)",
            "value": 74117.89583333333,
            "unit": "ns",
            "range": "± 47312.93876275265"
          },
          {
            "name": "Benchmarks.Search.DijkstraBenchmark.Dijkstra(N: 1000)",
            "value": 403508.47872340423,
            "unit": "ns",
            "range": "± 56677.03903826225"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 1000)",
            "value": 27827.897959183672,
            "unit": "ns",
            "range": "± 3407.9114306826164"
          },
          {
            "name": "Benchmarks.Search.BinarySearchBenchmarks.BinarySearch(N: 10000)",
            "value": 1646.4848484848485,
            "unit": "ns",
            "range": "± 334.0522494765362"
          },
          {
            "name": "Benchmarks.Search.LinearSearchBenchmarks.LinearSearch(N: 10000)",
            "value": 78862.38461538461,
            "unit": "ns",
            "range": "± 377.50486497119886"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 100)",
            "value": 2524.8561818259104,
            "unit": "ns",
            "range": "± 8.025438565324054"
          },
          {
            "name": "Benchmarks.Series.FactorialBenchmarks.Fact(N: 1000)",
            "value": 158111.41969401043,
            "unit": "ns",
            "range": "± 702.9659295045191"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 1000)",
            "value": 14.04844395071268,
            "unit": "ns",
            "range": "± 0.056817473536956396"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 1000)",
            "value": 1549.1988469441733,
            "unit": "ns",
            "range": "± 8.689098949321489"
          },
          {
            "name": "Benchmarks.Series.FibonacciBenchmarks.Fib(N: 10000)",
            "value": 21.26702609906594,
            "unit": "ns",
            "range": "± 0.011030242844224726"
          },
          {
            "name": "Benchmarks.Series.PrimesBenchmarks.ComputePrimes(N: 10000)",
            "value": 18099.31091962542,
            "unit": "ns",
            "range": "± 109.28125015900636"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 1000)",
            "value": 26430.868686868685,
            "unit": "ns",
            "range": "± 4397.894309795533"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 1000)",
            "value": 23789.434782608696,
            "unit": "ns",
            "range": "± 2591.4253335637927"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 1000)",
            "value": 145688.4375,
            "unit": "ns",
            "range": "± 1197.729739618528"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 1000)",
            "value": 5061246.785714285,
            "unit": "ns",
            "range": "± 5263.648269441605"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 1000)",
            "value": 900115.0666666667,
            "unit": "ns",
            "range": "± 6509.087838955477"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 1000)",
            "value": 445999.76923076925,
            "unit": "ns",
            "range": "± 520.5566177734103"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 1000)",
            "value": 235862.6923076923,
            "unit": "ns",
            "range": "± 3700.169329112191"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 1000)",
            "value": 569988.0833333334,
            "unit": "ns",
            "range": "± 4238.943167139944"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 1000)",
            "value": 965804,
            "unit": "ns",
            "range": "± 7903.1428385973595"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 1000)",
            "value": 799684.6666666666,
            "unit": "ns",
            "range": "± 1012.9500870170647"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 1000)",
            "value": 201581.04166666666,
            "unit": "ns",
            "range": "± 29460.149960641895"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 1000)",
            "value": 3509596.533333333,
            "unit": "ns",
            "range": "± 7910.173971959571"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Ascending(N: 10000)",
            "value": 30942.928571428572,
            "unit": "ns",
            "range": "± 258.88413335987684"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Ascending(N: 10000)",
            "value": 29915.31914893617,
            "unit": "ns",
            "range": "± 1089.108233260488"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Ascending(N: 10000)",
            "value": 467563.76923076925,
            "unit": "ns",
            "range": "± 4164.6050263669695"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Ascending(N: 10000)",
            "value": 514140203,
            "unit": "ns",
            "range": "± 5441165.583734978"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Random(N: 10000)",
            "value": 85339729.73076923,
            "unit": "ns",
            "range": "± 362715.372115693"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Random(N: 10000)",
            "value": 38585892.35714286,
            "unit": "ns",
            "range": "± 73905.64550894205"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Random(N: 10000)",
            "value": 1051864.5,
            "unit": "ns",
            "range": "± 15637.12341611363"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Random(N: 10000)",
            "value": 6692979.666666667,
            "unit": "ns",
            "range": "± 16243.720503921624"
          },
          {
            "name": "Benchmarks.Sorting.BubbleSortBenchmarks.BubbleSort_Descending(N: 10000)",
            "value": 92975016.76923077,
            "unit": "ns",
            "range": "± 106617.3750576908"
          },
          {
            "name": "Benchmarks.Sorting.InsertionSortBenchmarks.InsertionSort_Descending(N: 10000)",
            "value": 77673527.78571428,
            "unit": "ns",
            "range": "± 255491.51125027725"
          },
          {
            "name": "Benchmarks.Sorting.MergeSortBenchmarks.MergeSort_Descending(N: 10000)",
            "value": 500253.6818181818,
            "unit": "ns",
            "range": "± 7251.721008451414"
          },
          {
            "name": "Benchmarks.Sorting.QuickSortBenchmarks.QuickSort_Descending(N: 10000)",
            "value": 348907843.78571427,
            "unit": "ns",
            "range": "± 379144.35532356246"
          }
        ]
      }
    ]
  }
}