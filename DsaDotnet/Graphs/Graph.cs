namespace DsaDotnet.Graphs;

public abstract class Graph<T, U> where U : IEquatable<U> where T : IGraphNode<T, U>
{
    internal readonly Dictionary<U, T> Nodes = new();

    public void AddNodes(params T[] nodes)
    {
        for (var i = 0; i < nodes.Length; i++)
        {
            Nodes[nodes[i].Key] = nodes[i];
        }
    }

    public IReadOnlyCollection<T> AllNodes()
    {
        return Nodes.Values;
    }
}
