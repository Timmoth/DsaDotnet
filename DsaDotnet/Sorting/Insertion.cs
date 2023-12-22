namespace DsaDotnet;

public static partial class Sorting
{
    public static T[] InsertionSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.InsertionSortInPlace(comparer);
        return elementArray;
    }

    public static void InsertionSortInPlace<T>(this T[] source, IComparer<T>? comparer = null)
    {
        if (source.Length < 2)
        {
            return;
        }

        comparer ??= Comparer<T>.Default;

        for (var i = 1; i < source.Length; i++)
        {
            var key = source[i];
            var j = i - 1;

            while (j >= 0 && comparer.Compare(source[j], key) > 0)
            {
                source[j + 1] = source[j];
                j--;
            }

            source[j + 1] = key;
        }
    }
}
