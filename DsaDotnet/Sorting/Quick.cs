namespace DsaDotnet;

public static partial class Sorting
{
    /// <summary>
    /// Sorts the elements of the sequence using the QuickSort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the sequence.</typeparam>
    /// <param name="source">The sequence to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
    /// <returns>A new array containing the sorted elements.</returns>
    public static T[] QuickSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.QuickSortInPlace(comparer);
        return elementArray;
    }

    /// <summary>
    /// Sorts the elements of the list using the QuickSort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the list.</typeparam>
    /// <param name="source">The list to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
    public static void QuickSortInPlace<T>(this IList<T> source, IComparer<T>? comparer = null)
    {
        if (source.Count < 2)
        {
            return;
        }

        comparer ??= Comparer<T>.Default;

        QuickSort(source, 0, source.Count - 1, comparer);
    }

    private static void QuickSort<T>(IList<T> source, int low, int high, IComparer<T> comparer)
    {
        while (low < high)
        {
            var partitionIndex = Partition(source, low, high, comparer);

            QuickSort(source, low, partitionIndex - 1, comparer);
            low = partitionIndex + 1;
        }
    }

    private static int Partition<T>(IList<T> source, int low, int high, IComparer<T> comparer)
    {
        var pivot = source[high];
        var i = low - 1;

        for (var j = low; j < high; j++)
        {
            if (comparer.Compare(source[j], pivot) > 0)
            {
                continue;
            }

            i++;
            Swap(source, i, j);
        }

        Swap(source, i + 1, high);
        return i + 1;
    }
}
