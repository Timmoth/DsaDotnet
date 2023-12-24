namespace DsaDotnet.Graphs;

public class WeightedGraph<U> : Graph<WeightedGraphNode<U>, U> where U : IEquatable<U>
{
    public void AddEdges((U source, U destination)[] edges, int weight)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.TryGetValue(source, out var sourceNode))
            {
                sourceNode = Nodes[source] = new WeightedGraphNode<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new WeightedGraphNode<U> { Key = destination };
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
                sourceNode = Nodes[source] = new WeightedGraphNode<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new WeightedGraphNode<U> { Key = destination };
            }

            sourceNode.AddNeighbor(destinationNode, weight);
        }
    }
}
