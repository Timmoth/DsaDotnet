namespace DsaDotnet;

public static partial class Search
{
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
