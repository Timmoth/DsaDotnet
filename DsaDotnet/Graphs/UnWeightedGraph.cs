namespace DsaDotnet.Graphs;

public class UnWeightedGraph<U> : Graph<GraphNode<U>, U> where U : IEquatable<U>
{
    public void AddEdges((U source, U destination)[] edges)
    {
        for (var i = 0; i < edges.Length; i++)
        {
            var (source, destination) = edges[i];
            if (!Nodes.TryGetValue(source, out var sourceNode))
            {
                sourceNode = Nodes[source] = new GraphNode<U> { Key = source };
            }

            if (!Nodes.TryGetValue(destination, out var destinationNode))
            {
                destinationNode = Nodes[destination] = new GraphNode<U> { Key = destination };
            }

            sourceNode.AddNeighbor(destinationNode);
        }
    }
}
