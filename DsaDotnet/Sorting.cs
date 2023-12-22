﻿namespace DsaDotnet;

public static class Sorting
{
    public static IEnumerable<T> BubbleSort<T>(this IEnumerable<T> source, IComparer<T>? comparer = null)
    {
        if (source == null)
            throw new ArgumentNullException(nameof(source));

        var elementArray = source.ToArray();
        elementArray.BubbleSortInPlace(comparer);
        return elementArray;
    }

    public static void BubbleSortInPlace<T>(this T[] source, IComparer<T>? comparer = null)
    {
        if (source == null)
            throw new ArgumentNullException(nameof(source));

        comparer ??= Comparer<T>.Default;

        var n = source.Length;
        bool swapped;

        do
        {
            swapped = false;
            for (var i = 0; i < n - 1; i++)
            {
                if (comparer.Compare(source[i], source[i + 1]) <= 0)
                    continue;

                (source[i], source[i + 1]) = (source[i + 1], source[i]);
                swapped = true;
            }

            n--;
        } while (swapped);
    }
}