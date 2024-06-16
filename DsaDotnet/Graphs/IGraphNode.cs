namespace DsaDotnet.Graphs;

public interface IGraphNode<out TSelf, T> where T : IEquatable<T>
{
    /// <summary>
    /// Gets or sets the key of the graph node.
    /// </summary>
    public T Key { get; set; }

    /// <summary>
    /// Gets the neighbors of the graph node.
    /// </summary>
    /// <returns>An <see cref="IReadOnlyList{TSelf}"/> containing the neighbors of the graph node.</returns>
    public IReadOnlyList<TSelf> GetNeighbors();
}
