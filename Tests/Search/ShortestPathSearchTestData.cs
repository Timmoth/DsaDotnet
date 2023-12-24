using DsaDotnet.Graphs;

namespace Tests.Search;

public class ShortestPathSearchTestData : TheoryData<(int a, int b)[], Predicate<WeightedNode<int>>, int, int[]?>
{
    public ShortestPathSearchTestData()
    {
        Add(new[] { (0, 1), (1, 2) }, i => i.Key == 3, 0, null);
        Add(new[] { (0, 1) }, i => i.Key == 0, 0, new[] { 0 });
        Add(new[] { (0, 1), (1, 2), (2, 3) }, i => i.Key == 3, 0, new[] { 0, 1, 2, 3 });
        Add(new[] { (0, 1), (1, 2), (2, 3) }, i => i.Key == 3, 2, new[] { 2, 3 });
        Add(new[] { (0, 1), (0, 2), (1, 3), (2, 4), (3, 4) }, i => i.Key == 4, 0, new[] { 0, 2, 4 });
        Add(new[] { (0, 1), (0, 2), (2, 1), (2, 2), (1, 3), (2, 4), (3, 4) }, i => i.Key == 4, 0, new[] { 0, 2, 4 });
    }
}
