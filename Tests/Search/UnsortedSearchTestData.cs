namespace Tests.Search;

public class UnsortedSearchTestData : TheoryData<int[], int, int>
{
    public UnsortedSearchTestData()
    {
        Add(new int[] { }, 1, -1);
        Add(new[] { 0 }, 1, -1);
        Add(new[] { 0 }, 0, 0);
        Add(new[] { 1, 0 }, 0, 1);
        Add(new[] { 1, 0 }, 1, 0);
        Add(new[] { 0, 2, 1 }, 2, 1);
        Add(new[] { 2, 0, 1 }, 1, 2);
        Add(new[] { 4, 8, -1, 3, 1 }, 3, 3);
        Add(new[] { 2, 2 }, 2, 0);
    }
}
