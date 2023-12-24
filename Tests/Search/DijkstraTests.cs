using DsaDotnet;
using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Search;

public class DijkstraTests
{
    [Theory]
    [ClassData(typeof(ShortestPathSearchTestData))]
    public void Dijkstra_Finds_ShortestPath_From_Source_To_Destination((int a, int b)[] edges,
        Predicate<WeightedGraphNode<int>> predicate,
        int start, int[]? expected)
    {
        // Arrange
        var graph = new WeightedGraph<int>();
        graph.AddEdges(edges, 1);

        // Act
        var path = graph.Dijkstra(start, predicate);

        // Assert
        if (expected == null)
        {
            path.Should().BeNull();
        }
        else
        {
            path!.Select(n => n.Key).Should().Equal(expected);
        }
    }
}
