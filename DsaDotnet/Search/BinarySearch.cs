namespace DsaDotnet;

public static partial class Search
{
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
