using System.Numerics;

namespace DsaDotnet
{
    public class Fibonacci
    {
        public static ulong Compute(uint n)
        {
            if (n <= 1)
            {
                return n;
            }

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
}
