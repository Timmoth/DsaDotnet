namespace DsaDotnet.Graphs;

public class Node<T>
{
    public Node(T data)
    {
        Data = data;
        Neighbors = new Dictionary<Node<T>, int>();
    }

    public T Data { get; }
    public Dictionary<Node<T>, int> Neighbors { get; }
}
