namespace DsaDotnet;

public static partial class Sorting
{
    /// <summary>
    /// Sorts the elements of the source collection using the Merge Sort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the collection.</typeparam>
    /// <param name="source">The source collection to be sorted.</param>
    /// <param name="comparer">The comparer used to compare elements. If null, the default comparer for the type is used.</param>
    /// <returns>A new array containing the sorted elements.</returns>
    public static T[] MergeSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.MergeSortInPlace(comparer);
        return elementArray;
    }

    /// <summary>
    /// Sorts the elements of the source array using the Merge Sort algorithm in place.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the array.</typeparam>
    /// <param name="source">The source array to be sorted.</param>
    /// <param name="comparer">The comparer used to compare elements. If null, the default comparer for the type is used.</param>
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

    /// <summary>
    /// Merges two sorted subarrays of the given array.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the array.</typeparam>
    /// <param name="array">The array to be merged.</param>
    /// <param name="left">The starting index of the left subarray.</param>
    /// <param name="mid">The ending index of the left subarray and the starting index of the right subarray.</param>
    /// <param name="right">The ending index of the right subarray.</param>
    /// <param name="comparer">The comparer used to compare elements.</param>
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
