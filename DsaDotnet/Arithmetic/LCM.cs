namespace DsaDotnet;

public static partial class Arithmetic
{
    public static int LCM(int a, int b)
    {
        if (a == 0 || b == 0)
        {
            return 0;
        }

        return Math.Abs((a * b) / GCD(a, b));
    }

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
