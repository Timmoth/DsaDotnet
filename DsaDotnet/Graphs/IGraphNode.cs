namespace DsaDotnet.Graphs;

public interface IGraphNode<out TSelf, T> where T : IEquatable<T>
{
    public T Key { get; set; }
    public IReadOnlyList<TSelf> GetNeighbors();
}
