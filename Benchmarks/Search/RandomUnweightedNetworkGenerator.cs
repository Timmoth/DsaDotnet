using DsaDotnet.Graphs;

namespace Benchmarks.Search;

public class RandomUnweightedNetworkGenerator<T> where T : IEquatable<T>
{
    private readonly Random _random = new(0);

    public GraphNode<T>[] GenerateRandomNetwork(int n, Func<int, GraphNode<T>> nodeGenerator)
    {
        if (n <= 0)
        {
            throw new ArgumentException("Number of nodes should be greater than zero.");
        }

        var nodes = new GraphNode<T>[n];
        for (var i = 0; i < n; i++)
        {
            nodes[i] = nodeGenerator(i);
        }

        ConnectRandomNodes(nodes);

        return nodes;
    }

    private void ConnectRandomNodes(IReadOnlyList<GraphNode<T>> nodes)
    {
        foreach (var node in nodes)
        {
            // Randomly choose a number of neighbors for each node
            var numNeighbors = _random.Next(0, nodes.Count);
            for (var i = 0; i < numNeighbors; i++)
            {
                var randomNeighborIndex = _random.Next(nodes.Count);
                var connectedNode = nodes[randomNeighborIndex];

                if (node != connectedNode)
                {
                    node.AddNeighbor(connectedNode);
                }
            }
        }
    }
}
