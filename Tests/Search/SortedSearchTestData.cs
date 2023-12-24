namespace Tests.Search;

public class SortedSearchTestData : TheoryData<int[], int, int>
{
    public SortedSearchTestData()
    {
        Add(new int[] { }, 1, -1);
        Add(new[] { 0 }, 1, -1);
        Add(new[] { 0 }, 0, 0);
        Add(new[] { 0, 1 }, 0, 0);
        Add(new[] { 0, 1 }, 1, 1);
        Add(new[] { 0, 1, 2 }, 1, 1);
        Add(new[] { 0, 1, 2 }, 2, 2);
        Add(new[] { 0, 1, 2, 4, 8 }, 4, 3);
    }
}
