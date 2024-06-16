Denoted by n!, the factorial of an unsigned integer is the product of all integers less then or equal to n.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Series/Factorial.cs)

```
n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

0! = 1
1! = 1
2! = 2
3! = 6
```

#### Usage
```cs
ulong result = Series.Factorial(1000);
result = 1000.Factorial();
```

#### Benchmarks
```
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Factorial*
```