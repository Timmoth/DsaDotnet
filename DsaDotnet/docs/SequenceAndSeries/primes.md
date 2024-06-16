Unsigned integers greater than 1 that have no positive divisors other than 1 and themselves.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Series/Primes.cs)

```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29
```

#### Usage
```cs
List<int> result = Series.PrimesUpTo(1000);
result = 1000.PrimesUpTo();
```

#### Benchmarks
```console
dotnet run --project ./Benchmarks/Benchmarks.csproj -c Release -- --job short --memory --f *Primes*
```