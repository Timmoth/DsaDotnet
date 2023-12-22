namespace Tests.Sorting;

public class DescendingComparer : IComparer<int>
{
    public int Compare(int x, int y)
    {
        // Compare y with x to sort in descending order
        return y.CompareTo(x);
    }
}
