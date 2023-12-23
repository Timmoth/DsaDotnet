using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Graphs;

public class BfsTests
{
    [Theory]
    [ClassData(typeof(GraphSearchTestData))]
    public void Bfs_Finds_ShortestPath_From_Source_To_Destination((int a, int b)[] edges, Predicate<int> predicate,
        int start, int? expected)
    {
        // Arrange
        var graph = new Graph<int>();
        graph.AddEdges(edges);

        // Act
        var node = graph.BreadthFirstSearch(start, predicate);

        // Assert
        node?.Data.Should().Be(expected);
    }
}
