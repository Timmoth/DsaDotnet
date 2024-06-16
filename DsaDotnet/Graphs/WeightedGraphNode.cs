namespace DsaDotnet.Graphs;

/// <summary>
/// Represents a weighted graph node.
/// </summary>
/// <typeparam name="T">The type of the node's key.</typeparam>
public class WeightedGraphNode<T> : IGraphNode<WeightedGraphNode<T>, T> where T : IEquatable<T>
{
    private readonly List<WeightedGraphNode<T>> _neighbors = new();
    private readonly List<(int, WeightedGraphNode<T>)> _weightedNeighbors = new();
    public required T Key { get; set; }

    /// <summary>
    /// Gets the list of neighbors of the node.
    /// </summary>
    /// <returns>The list of neighbors.</returns>
    public IReadOnlyList<WeightedGraphNode<T>> GetNeighbors()
    {
        return _neighbors;
    }

    /// <summary>
    /// Gets the collection of weighted neighbors of the node.
    /// </summary>
    /// <returns>The collection of weighted neighbors.</returns>
    public IReadOnlyCollection<(int, WeightedGraphNode<T>)> GetWeightedNeighbors()
    {
        return _weightedNeighbors;
    }

    /// <summary>
    /// Adds a neighbor to the node with the specified weight.
    /// </summary>
    /// <param name="neighbor">The neighbor node.</param>
    /// <param name="weight">The weight of the neighbor.</param>
    public void AddNeighbor(WeightedGraphNode<T> neighbor, int weight)
    {
        _neighbors.Add(neighbor);
        _weightedNeighbors.Add((weight, neighbor));
    }
}
