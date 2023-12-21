namespace DsaDotnet
{
    public class Fibonacci
    {
        public static long Compute(int n)
        {
            if (n <= 1)
            {
                return n >= 0 ? n : -1;
            }

            return (long)FibonacciHelper(n).Item1;
        }

        private static (ulong, ulong) FibonacciHelper(int n)
        {
            if (n == 0)
                return (0, 1);

            var (a, b) = FibonacciHelper(n >> 1);
            var c = a * ((b << 1) - a);
            var d = a * a + b * b;
            return (n & 1) == 0 ? (c, d) : (d, c + d);
        }
    }
}
