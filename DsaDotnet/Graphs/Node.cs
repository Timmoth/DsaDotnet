namespace DsaDotnet.Graphs;

public interface INode<out TSelf, T> where T : IEquatable<T>
{
    public T Key { get; set; }
    public IReadOnlyList<TSelf> GetNeighbors();
}

public class Node<T> : INode<Node<T>, T> where T : IEquatable<T>
{
    private readonly List<Node<T>> _neighbors = new();
    public required T Key { get; set; }

    public IReadOnlyList<Node<T>> GetNeighbors()
    {
        return _neighbors;
    }

    public void AddNeighbor(Node<T> neighbor)
    {
        if (_neighbors.Contains(neighbor))
        {
            return;
        }

        _neighbors.Add(neighbor);
    }
}

public class WeightedNode<T> : INode<WeightedNode<T>, T> where T : IEquatable<T>
{
    private readonly List<WeightedNode<T>> _neighbors = new();
    private readonly List<(int, WeightedNode<T>)> _weightedNeighbors = new();
    public required T Key { get; set; }

    public IReadOnlyList<WeightedNode<T>> GetNeighbors()
    {
        return _neighbors;
    }

    public IReadOnlyCollection<(int, WeightedNode<T>)> GetWeightedNeighbors()
    {
        return _weightedNeighbors;
    }

    public void AddNeighbor(WeightedNode<T> neighbor, int weight)
    {
        _neighbors.Add(neighbor);
        _weightedNeighbors.Add((weight, neighbor));
    }
}
