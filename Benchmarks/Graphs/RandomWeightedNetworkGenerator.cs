using DsaDotnet.Graphs;

namespace Benchmarks.Graphs;

public class RandomWeightedNetworkGenerator<T> where T : IEquatable<T>
{
    private readonly Random _random = new(0);

    public WeightedNode<T>[] GenerateRandomNetwork(int n, Func<int, WeightedNode<T>> nodeGenerator)
    {
        if (n <= 0)
        {
            throw new ArgumentException("Number of nodes should be greater than zero.");
        }

        var nodes = new WeightedNode<T>[n];
        for (var i = 0; i < n; i++)
        {
            nodes[i] = nodeGenerator(i);
        }

        ConnectRandomNodes(nodes);

        return nodes;
    }

    private void ConnectRandomNodes(IReadOnlyList<WeightedNode<T>> nodes)
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
                    node.AddNeighbor(connectedNode, 1);
                }
            }
        }
    }
}
