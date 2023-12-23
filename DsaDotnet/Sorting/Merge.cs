namespace DsaDotnet;

public static partial class Sorting
{
    public static T[] MergeSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.MergeSortInPlace(comparer);
        return elementArray;
    }

    public static void MergeSortInPlace<T>(this T[] source, IComparer<T>? comparer = null)
    {
        if (source.Length < 2)
        {
            return;
        }

        comparer ??= Comparer<T>.Default;

        var n = source.Length;
        for (var currentSize = 1; currentSize <= n - 1; currentSize = 2 * currentSize)
        {
            for (var leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize)
            {
                var mid = Math.Min(leftStart + currentSize - 1, n - 1);
                var rightEnd = Math.Min(leftStart + 2 * currentSize - 1, n - 1);

                Merge(source, leftStart, mid, rightEnd, comparer);
            }
        }
    }

    private static void Merge<T>(T[] array, int left, int mid, int right, IComparer<T> comparer)
    {
        var n1 = mid - left + 1;
        var n2 = right - mid;

        var leftArray = new T[n1];
        var rightArray = new T[n2];

        Array.Copy(array, left, leftArray, 0, n1);
        Array.Copy(array, mid + 1, rightArray, 0, n2);

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2)
        {
            if (comparer.Compare(leftArray[i], rightArray[j]) <= 0)
            {
                array[k] = leftArray[i];
                i++;
            }
            else
            {
                array[k] = rightArray[j];
                j++;
            }

            k++;
        }

        while (i < n1)
        {
            array[k] = leftArray[i];
            i++;
            k++;
        }

        while (j < n2)
        {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }
}
