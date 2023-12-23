namespace DsaDotnet.Graphs;

public class Graph<T> where T : notnull
{
    internal readonly Dictionary<T, Node<T>> Nodes = new();

    public void AddNodes(params T[] data)
    {
        for (var i = 0; i < data.Length; i++)
        {
            Nodes[data[i]] = new Node<T>(data[i]);
        }
    }

    public void AddNodes(params Node<T>[] nodes)
    {
        foreach (var node in nodes)
        {
            Nodes[node.Data] = node;
        }
    }

    public void AddEdges(params (T source, T destination)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var edge = edges[i];
            if (!Nodes.ContainsKey(edge.source))
            {
                Nodes[edge.source] = new Node<T>(edge.source);
            }

            if (!Nodes.ContainsKey(edge.destination))
            {
                Nodes[edge.destination] = new Node<T>(edge.destination);
            }

            Nodes[edge.source].Neighbors.Add(Nodes[edge.destination]);
        }
    }
}
