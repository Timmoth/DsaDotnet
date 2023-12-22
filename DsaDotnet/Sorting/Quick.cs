namespace DsaDotnet;

public static partial class Sorting
{
    public static T[] QuickSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.QuickSortInPlace(comparer);
        return elementArray;
    }

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
