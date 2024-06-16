namespace DsaDotnet;

public static partial class Sorting
{
    /// <summary>
    /// Sorts the elements of the sequence using the Insertion Sort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the sequence.</typeparam>
    /// <param name="source">The sequence to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
    /// <returns>A new array containing the sorted elements.</returns>
    public static T[] InsertionSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.InsertionSortInPlace(comparer);
        return elementArray;
    }

    /// <summary>
    /// Sorts the elements of the array using the Insertion Sort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the array.</typeparam>
    /// <param name="source">The array to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
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
