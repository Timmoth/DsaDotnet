using DsaDotnet.Graphs;
using FluentAssertions;

namespace Tests.Graphs;

public class BfsTests
{
    [Theory]
    [ClassData(typeof(BfsTestData))]
    public void TestBfs((int a, int b)[] edges, Predicate<int> predicate, int start, int[]? expected)
    {
        // Arrange
        var graph = new Graph<int>();
        graph.AddEdges(edges);

        // Act
        var bfsResult = graph.BreadthFirstSearch(start, predicate);

        // Assert
        bfsResult.Should().Equal(expected);
    }
}
