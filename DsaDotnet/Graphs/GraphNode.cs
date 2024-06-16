namespace DsaDotnet.Graphs;

public class GraphNode<T> : IGraphNode<GraphNode<T>, T> where T : IEquatable<T>
{
    private readonly List<GraphNode<T>> _neighbors = new();
    public required T Key { get; set; }

    /// <summary>
    /// Gets the neighbors of the graph node.
    /// </summary>
    /// <returns>An <see cref="IReadOnlyList{T}"/> of <see cref="GraphNode{T}"/>.</returns>
    public IReadOnlyList<GraphNode<T>> GetNeighbors()
    {
        return _neighbors;
    }

    /// <summary>
    /// Adds a neighbor to the graph node.
    /// </summary>
    /// <param name="neighbor">The neighbor to add.</param>
    public void AddNeighbor(GraphNode<T> neighbor)
    {
        if (_neighbors.Any(n => n.Key.Equals(neighbor.Key)))
        {
            return;
        }

        _neighbors.Add(neighbor);
    }
}
