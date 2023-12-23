using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Graphs;

public class DijkstraTests
{
    [Theory]
    [ClassData(typeof(ShortestPathSearchTestData))]
    public void Dijkstra_Finds_ShortestPath_From_Source_To_Destination((int a, int b)[] edges, Predicate<int> predicate,
        int start, int[]? expected)
    {
        // Arrange
        var graph = new Graph<int>();
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
            path!.Select(n => n.Data).Should().Equal(expected);
        }
    }
}
