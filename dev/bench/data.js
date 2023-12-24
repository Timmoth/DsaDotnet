window.BENCHMARK_DATA = {
  "lastUpdate": 1703418596181,
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
      }
    ]
  }
}