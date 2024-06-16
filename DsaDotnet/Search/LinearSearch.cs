namespace DsaDotnet;

public static partial class Search
{
    /// <summary>
    /// Performs a linear search on the given source list to find the index of the target element.
    /// </summary>
    /// <typeparam name="T">The type of elements in the list.</typeparam>
    /// <param name="source">The source list to search.</param>
    /// <param name="target">The target element to search for.</param>
    /// <returns>The index of the target element if found; otherwise, -1.</returns>
    public static int LinearSearch<T>(this IList<T> source, T target) where T : IEquatable<T>
    {
        for (var i = 0; i < source.Count; i++)
        {
            if (target.Equals(source[i]))
            {
                return i;
            }
        }

        return -1;
    }
}
