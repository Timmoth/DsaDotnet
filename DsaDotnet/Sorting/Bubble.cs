namespace DsaDotnet;

public static partial class Sorting
{
    /// <summary>
    /// Sorts the elements of the sequence using the Bubble Sort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the sequence.</typeparam>
    /// <param name="source">The sequence to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
    /// <returns>A new array containing the sorted elements.</returns>
    public static T[] BubbleSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        var elementArray = source.ToArray();
        elementArray.BubbleSortInPlace(comparer);
        return elementArray;
    }

    /// <summary>
    /// Sorts the elements of the array using the Bubble Sort algorithm.
    /// </summary>
    /// <typeparam name="T">The type of the elements in the array.</typeparam>
    /// <param name="source">The array to sort.</param>
    /// <param name="comparer">The comparer to use for comparing elements. If null, the default comparer for the type is used.</param>
    public static void BubbleSortInPlace<T>(this T[] source, IComparer<T>? comparer = null)
    {
        if (source.Length < 2)
        {
            return;
        }

        comparer ??= Comparer<T>.Default;

        var n = source.Length;
        bool swapped;

        do
        {
            swapped = false;
            for (var i = 0; i < n - 1; i++)
            {
                if (comparer.Compare(source[i], source[i + 1]) <= 0)
                {
                    continue;
                }

                (source[i], source[i + 1]) = (source[i + 1], source[i]);
                swapped = true;
            }

            n--;
        } while (swapped);
    }
}
