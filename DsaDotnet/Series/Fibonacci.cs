using System.Numerics;

namespace DsaDotnet;

public static partial class Series
{
    public static BigInteger Factorial(this int n)
    {
        switch (n)
        {
            case < 0:
                throw new ArgumentException("Cannot compute the factorial of a negative number");
            case 0 or 1:
                return 1;
            default:
                {
                    BigInteger result = 1;
                    for (var i = 2; i <= n; i++)
                    {
                        result *= i;
                    }

                    return result;
                }
        }
    }
}
