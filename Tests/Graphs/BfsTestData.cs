namespace Tests.Graphs;

public class BfsTestData : TheoryData<(int a, int b)[], Predicate<int>, int, int[]?>
{
    public BfsTestData()
    {
        Add(new[] { (0, 1), (1, 2) }, i => i == 3, 0, null);
        Add(new[] { (0, 1), (1, 2), (2, 3) }, i => i == 3, 0, new[] { 0, 1, 2, 3 });
        Add(new[] { (0, 1), (1, 2), (2, 3) }, i => i == 3, 2, new[] { 2, 3 });
        Add(new[] { (0, 1), (0, 2), (1, 3), (2, 4), (3, 4) }, i => i == 4, 0, new[] { 0, 1, 2, 3, 4 });
        Add(new[] { (0, 1), (0, 2), (2, 1), (2, 2), (1, 3), (2, 4), (3, 4) }, i => i == 4, 0, new[] { 0, 1, 2, 3, 4 });
    }
}
