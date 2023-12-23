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
    private readonly SortedList<int, List<WeightedNode<T>>> _sortedNeighbors = new();
    private readonly List<WeightedNode<T>> _unsortedNeighbors = new();
    public required T Key { get; set; }

    public IReadOnlyList<WeightedNode<T>> GetNeighbors()
    {
        return _unsortedNeighbors;
    }

    public IReadOnlyCollection<KeyValuePair<int, WeightedNode<T>>> GetWeightedNeighbors()
    {
        return _sortedNeighbors
            .SelectMany((w, n) => w.Value.Select(v => new KeyValuePair<int, WeightedNode<T>>(w.Key, v))).ToList();
    }

    public void AddNeighbor(WeightedNode<T> neighbor, int weight)
    {
        _unsortedNeighbors.Add(neighbor);
        if (_sortedNeighbors.TryGetValue(weight, out var neighbors))
        {
            neighbors.Add(neighbor);
        }
        else
        {
            _sortedNeighbors.Add(weight, new List<WeightedNode<T>> { neighbor });
        }
    }
}
