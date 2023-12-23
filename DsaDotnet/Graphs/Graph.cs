namespace DsaDotnet.Graphs;

public abstract class Graph<T, U> where U : IEquatable<U> where T : INode<T, U>
{
    internal readonly Dictionary<U, T> Nodes = new();

    public void AddNodes(params T[] nodes)
    {
        for (var i = 0; i < nodes.Length; i++)
        {
            Nodes[nodes[i].Key] = nodes[i];
        }
    }
}

public class UnWeightedGraph<U> : Graph<Node<U>, U> where U : IEquatable<U>
{
    public void AddEdges((U source, U destination)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.TryGetValue(source, out var sourceNode))
            {
                sourceNode = Nodes[source] = new Node<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new Node<U> { Key = destination };
            }

            sourceNode.AddNeighbor(destinationNode);
        }
    }
}

public class WeightedGraph<U> : Graph<WeightedNode<U>, U> where U : IEquatable<U>
{
    public void AddEdges((U source, U destination)[] edges, int weight)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.TryGetValue(source, out var sourceNode))
            {
                sourceNode = Nodes[source] = new WeightedNode<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new WeightedNode<U> { Key = destination };
            }

            sourceNode.AddNeighbor(destinationNode, weight);
        }
    }

    public void AddEdges((U source, U destination, int weight)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination, weight) = edges[i];
            if (!Nodes.TryGetValue(source, out var sourceNode))
            {
                sourceNode = Nodes[source] = new WeightedNode<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new WeightedNode<U> { Key = destination };
            }

            sourceNode.AddNeighbor(destinationNode, weight);
        }
    }
}