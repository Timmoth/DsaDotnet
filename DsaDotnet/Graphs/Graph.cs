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


    public void AddEdges((T source, T destination)[] edges, int weight)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.ContainsKey(source))
            {
                Nodes[source] = new Node<T>(source);
            }

            if (!Nodes.ContainsKey(destination))
            {
                Nodes[destination] = new Node<T>(destination);
            }

            Nodes[source].Neighbors[Nodes[destination]] = weight;
        }
    }

    public void AddEdges(params (T source, T destination)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.ContainsKey(source))
            {
                Nodes[source] = new Node<T>(source);
            }

            if (!Nodes.ContainsKey(destination))
            {
                Nodes[destination] = new Node<T>(destination);
            }

            Nodes[source].Neighbors[Nodes[destination]] = 0;
        }
    }

    public void AddEdges(params (T source, T destination, int weight)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination, weight) = edges[i];
            if (!Nodes.ContainsKey(source))
            {
                Nodes[source] = new Node<T>(source);
            }

            if (!Nodes.ContainsKey(destination))
            {
                Nodes[destination] = new Node<T>(destination);
            }

            Nodes[source].Neighbors[Nodes[destination]] = weight;
        }
    }
}
