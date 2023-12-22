namespace Benchmarks.Sorting;

internal static class SortingTestHelpers
{
    public static int[] GenerateAscendingArray(int size)
    {
        var array = new int[size];
        for (var i = 0; i < size; i++)
        {
            array[i] = i;
        }

        return array;
    }

    public static int[] GenerateRandomArray(int size)
    {
        var random = new Random(0);
        var array = new int[size];
        for (var i = 0; i < size; i++)
        {
            array[i] = random.Next();
        }

        return array;
    }

    public static int[] GenerateDescendingArray(int size)
    {
        var array = new int[size];
        for (var i = 0; i < size; i++)
        {
            array[i] = size - i;
        }

        return array;
    }
}
