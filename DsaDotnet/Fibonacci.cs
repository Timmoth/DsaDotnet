using System.Numerics;

namespace DsaDotnet;

public class Fibonacci
{
    public static ulong Compute(int input)
    {
        if (input <= 1)
        {
            if (input < 0) throw new ArgumentException("Cannot calculate the fibonacci of a negative number");

            return (ulong)input;
        }

        var n = (uint)input;
        ulong a = 0, b = 1;
        for (var i = 31 - BitOperations.LeadingZeroCount(n); i >= 0; i--)
        {
            var c = a * ((b << 1) - a);
            var d = a * a + b * b;
            a = c;
            b = d;
            if ((n & (1 << i)) == 0)
                continue;
            var temp = a + b;
            a = b;
            b = temp;
        }

        return a;
    }
}