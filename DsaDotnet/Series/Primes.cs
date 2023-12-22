namespace DsaDotnet;

public static partial class Series
{
    public static List<int> PrimesUpTo(this int n)
    {
        var primes = new List<int>();
        var isPrime = new bool[n + 1];

        // Initialize all numbers as potential primes
        Array.Fill(isPrime, true, 2, n - 1);

        // Mark multiples of each prime number as non-prime
        for (var p = 2; p * p <= n; p++)
        {
            if (isPrime[p])
            {
                for (var i = p * p; i <= n; i += p)
                {
                    isPrime[i] = false;
                }
            }
        }

        // Collect primes into a list
        for (var i = 2; i <= n; i++)
        {
            if (isPrime[i])
            {
                primes.Add(i);
            }
        }

        return primes;
    }
}
