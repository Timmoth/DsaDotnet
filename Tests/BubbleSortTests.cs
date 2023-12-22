using DsaDotnet;
using FluentAssertions;

namespace Tests;

public class BubbleSortTests
{
    [Theory]
    [InlineData(new[] { 1, 2, 3, 4, 5 }, new[] { 1, 2, 3, 4, 5 })]
    [InlineData(new[] { 5, 4, 3, 2, 1 }, new[] { 1, 2, 3, 4, 5 })]
    [InlineData(new[] { 5, 3, 7, 2, 8, 10, 1, 6, 4, 9 }, new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 })]
    public void BubbleSort_Returns_SortedCollection(int[] input, int[] expected)
    {
        // Arrange

        // Act
        var result = input.BubbleSort();

        // Assert
        result.Should().Equal(expected);
    }
}