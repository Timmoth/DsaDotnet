namespace DsaDotnet.Graphs;

public class WeightedGraphNode<T> : IGraphNode<WeightedGraphNode<T>, T> where T : IEquatable<T>
{
    private readonly List<WeightedGraphNode<T>> _neighbors = new();
    private readonly List<(int, WeightedGraphNode<T>)> _weightedNeighbors = new();
    public required T Key { get; set; }

    public IReadOnlyList<WeightedGraphNode<T>> GetNeighbors()
    {
        return _neighbors;
    }

    public IReadOnlyCollection<(int, WeightedGraphNode<T>)> GetWeightedNeighbors()
    {
        return _weightedNeighbors;
    }

    public void AddNeighbor(WeightedGraphNode<T> neighbor, int weight)
    {
        _neighbors.Add(neighbor);
        _weightedNeighbors.Add((weight, neighbor));
    }
}
