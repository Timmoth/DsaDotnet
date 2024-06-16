namespace DsaDotnet;

public static partial class Arithmetic
{
    /// <summary>
    /// Calculates the least common multiple (LCM) of two integers.
    /// </summary>
    /// <param name="a">The first integer.</param>
    /// <param name="b">The second integer.</param>
    /// <returns>The LCM of the two integers.</returns>
    public static int LCM(int a, int b)
    {
        if (a == 0 || b == 0)
        {
            return 0;
        }

        return Math.Abs(a * b / GCD(a, b));
    }

    /// <summary>
    /// Calculates the least common multiple (LCM) of multiple integers.
    /// </summary>
    /// <param name="arr">The array of integers.</param>
    /// <returns>The LCM of the multiple integers.</returns>
    public static int LCM(params int[] arr)
    {
        if (arr.Length == 0)
        {
            return 0;
        }

        if (arr.Length == 2)
        {
            return LCM(arr[0], arr[1]);
        }

        var lcm = arr[0];
        for (var i = 1; i < arr.Length; i++)
        {
            lcm = LCM(lcm, arr[i]);
        }

        return lcm;
    }
}
