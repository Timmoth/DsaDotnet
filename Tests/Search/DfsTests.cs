using DsaDotnet;
using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Search;

public class DfsTests
{
    [Theory]
    [ClassData(typeof(GraphSearchTestData))]
    public void Dfs_Finds_ShortestPath_From_Source_To_Destination((int a, int b)[] edges,
        Predicate<Node<int>> predicate,
        int start, int? expected)
    {
        // Arrange
        var graph = new UnWeightedGraph<int>();
        graph.AddEdges(edges);

        // Act
        var node = graph.DepthFirstSearch(start, predicate);

        // Assert
        node?.Key.Should().Be(expected);
    }
}
