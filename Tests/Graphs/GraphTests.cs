using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Graphs;

public class GraphTests
{
    [Theory]
    [InlineData(new int[] { })]
    [InlineData(new[] { 1, 2 })]
    [InlineData(new[] { 1, 1 })]
    public void WeightedGraph_AddNodes(int[] nodeKeys)
    {
        // Arrange
        var graph = new WeightedGraph<int>();
        graph.AddNodes(nodeKeys.Select(n => new WeightedGraphNode<int> { Key = n }).ToArray());

        // Act
        var nodes = graph.AllNodes();

        // Assert
        nodes.Select(n => n.Key).Should().Equal(nodeKeys.Distinct());
    }

    [Theory]
    [ClassData(typeof(GraphTestData))]
    public void WeightedGraph_AddEdges((int, int)[] edges)
    {
        // Arrange
        var nodeKeys = edges.SelectMany(e => new[] { e.Item1, e.Item2 }).Distinct();

        var graph = new WeightedGraph<int>();
        graph.AddEdges(edges, 1);

        // Act
        var nodes = graph.AllNodes();

        // Assert
        nodes.Select(n => n.Key).Should().Equal(nodeKeys);
    }

    [Theory]
    [ClassData(typeof(GraphTestData))]
    public void WeightedGraph_AddWeightedEdges((int, int)[] edges)
    {
        // Arrange
        var nodeKeys = edges.SelectMany(e => new[] { e.Item1, e.Item2 }).Distinct();

        var graph = new WeightedGraph<int>();
        graph.AddEdges(edges.Select(e => (e.Item1, e.Item2, 1)).ToArray());

        // Act
        var nodes = graph.AllNodes();

        // Assert
        nodes.Select(n => n.Key).Should().Equal(nodeKeys);
    }

    [Theory]
    [InlineData(new int[] { })]
    [InlineData(new[] { 1, 2 })]
    [InlineData(new[] { 1, 1 })]
    public void UnWeightedGraph_AddNodes(int[] nodeKeys)
    {
        // Arrange
        var graph = new UnWeightedGraph<int>();
        graph.AddNodes(nodeKeys.Select(n => new GraphNode<int> { Key = n }).ToArray());

        // Act
        var nodes = graph.AllNodes();

        // Assert
        nodes.Select(n => n.Key).Should().Equal(nodeKeys.Distinct());
    }

    [Theory]
    [ClassData(typeof(GraphTestData))]
    public void UnWeightedGraph_AddEdges((int, int)[] edges)
    {
        // Arrange
        var nodeKeys = edges.SelectMany(e => new[] { e.Item1, e.Item2 }).Distinct();

        var graph = new UnWeightedGraph<int>();
        graph.AddEdges(edges);

        // Act
        var nodes = graph.AllNodes();

        // Assert
        nodes.Select(n => n.Key).Should().Equal(nodeKeys);
    }

    [Theory]
    [InlineData(new int[] { })]
    [InlineData(new[] { 0 })]
    [InlineData(new[] { 1, 2, 3 })]
    [InlineData(new[] { 1, 1 })]
    public void GraphNode_AddNeighbor(int[] neighborKeys)
    {
        // Arrange
        var node = new GraphNode<int> { Key = 0 };
        var neighborNodes = neighborKeys.Select(k => new GraphNode<int> { Key = k });

        // Act
        foreach (var neighborNode in neighborNodes)
        {
            node.AddNeighbor(neighborNode);
        }

        // Assert
        var actualNeighborNodes = node.GetNeighbors();

        actualNeighborNodes.Select(n => n.Key).Should().Equal(neighborKeys.Distinct());
    }
}
