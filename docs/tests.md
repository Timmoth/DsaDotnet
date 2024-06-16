All tests must pass before a PR can be merged into main.

Run all the tests locally
```console
dotnet test
```

I use [Stryker mutation testing](https://github.com/stryker-mutator/stryker-net) to help identify missing tests

[View the Stryker report here](https://dashboard.stryker-mutator.io/reports/github.com/Timmoth/DsaDotnet/main#mutant)
```console
dotnet tool install --global dotnet-stryker
dotnet-stryker
```
Running Stryker will output a report outlining which mutations (essentially bugs) were introduced into your code that did not cause any tests to fail.