namespace DsaDotnet;

public static partial class Search
{
    /// <summary>
    /// Performs a binary search on a sorted list and returns the index of the specified value.
    /// </summary>
    /// <typeparam name="T">The type of elements in the list.</typeparam>
    /// <param name="source">The sorted list to search.</param>
    /// <param name="value">The value to search for.</param>
    /// <param name="comparer">The comparer used to compare elements. If null, the default comparer for the type is used.</param>
    /// <returns>The index of the specified value in the list, or -1 if the value is not found.</returns>
    public static int BinarySearch<T>(this IList<T> source, T value, IComparer<T>? comparer = null)
    {
        comparer ??= Comparer<T>.Default;

        var left = 0;
        var right = source.Count - 1;

        while (left <= right)
        {
            var middle = left + (right - left) / 2;

            var comparisonResult = comparer.Compare(value, source[middle]);

            switch (comparisonResult)
            {
                case 0:
                    return middle;
                case < 0:
                    right = middle - 1;
                    break;
                default:
                    left = middle + 1;
                    break;
            }
        }

        return -1; // Element not found
    }
}
