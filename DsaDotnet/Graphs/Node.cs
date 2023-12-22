namespace DsaDotnet.Graphs;

// Node class to represent each node in the graph
public class Node<T>
{
    public Node(T data)
    {
        Data = data;
        Neighbors = new List<Node<T>>();
    }

    public T Data { get; }
    public List<Node<T>> Neighbors { get; }
}
