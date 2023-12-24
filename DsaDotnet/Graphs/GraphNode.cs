namespace DsaDotnet.Graphs;

public class GraphNode<T> : IGraphNode<GraphNode<T>, T> where T : IEquatable<T>
{
    private readonly List<GraphNode<T>> _neighbors = new();
    public required T Key { get; set; }

    public IReadOnlyList<GraphNode<T>> GetNeighbors()
    {
        return _neighbors;
    }

    public void AddNeighbor(GraphNode<T> neighbor)
    {
        if (_neighbors.Any(n => n.Key.Equals(neighbor.Key)))
        {
            return;
        }

        _neighbors.Add(neighbor);
    }
}
