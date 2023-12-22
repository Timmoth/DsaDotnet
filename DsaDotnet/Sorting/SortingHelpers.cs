namespace DsaDotnet;

public static partial class Sorting
{
    private static void Swap<T>(IList<T> array, int i, int j)
    {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
