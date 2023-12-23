window.BENCHMARK_DATA = {
  "lastUpdate": 1703346907843,
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
      }
    ]
  }
}