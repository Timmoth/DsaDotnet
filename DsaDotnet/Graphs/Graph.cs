namespace DsaDotnet.Graphs;

/// <summary>
/// Represents an abstract graph data structure.
/// </summary>
/// <typeparam name="T">The type of the graph nodes.</typeparam>
/// <typeparam name="U">The type of the node keys.</typeparam>
public abstract class Graph<T, U> where U : IEquatable<U> where T : IGraphNode<T, U>
{
    internal readonly Dictionary<U, T> Nodes = new();

    /// <summary>
    /// Adds the specified nodes to the graph.
    /// </summary>
    /// <param name="nodes">The nodes to add.</param>
    public void AddNodes(params T[] nodes)
    {
        for (var i = 0; i < nodes.Length; i++)
        {
            Nodes[nodes[i].Key] = nodes[i];
        }
    }

    /// <summary>
    /// Returns all the nodes in the graph.
    /// </summary>
    /// <returns>A read-only collection of all the nodes in the graph.</returns>
    public IReadOnlyCollection<T> AllNodes()
    {
        return Nodes.Values;
    }
}
