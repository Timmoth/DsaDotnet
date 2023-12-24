namespace Tests.Graphs;

public class GraphTestData : TheoryData<(int, int)[]>
{
    public GraphTestData()
    {
        Add(new (int, int)[] { });
        Add(new[] { (1, 1) });
        Add(new[] { (1, 1), (1, 1) });
        Add(new[] { (1, 2), (2, 3) });
    }
}
