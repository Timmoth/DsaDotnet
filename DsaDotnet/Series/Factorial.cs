using System.Numerics;

namespace DsaDotnet;

/// <summary>
/// Provides a collection of mathematical series functions.
/// </summary>
public static partial class Series
{
    /// <summary>
    /// Computes the factorial of a given number.
    /// </summary>
    /// <param name="n">The number to compute the factorial for.</param>
    /// <returns>The factorial of the given number.</returns>
    /// <exception cref="ArgumentException">Thrown when the input number is negative.</exception>
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
