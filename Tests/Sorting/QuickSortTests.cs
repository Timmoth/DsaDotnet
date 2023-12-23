using DsaDotnet;
using FluentAssertions;

namespace Tests.Sorting;

public class QuickSortTests
{
    [Theory]
    [ClassData(typeof(SortIntArrayTestData))]
    public void QuickSort_Returns_SortedCollection(int[] input, int[] expected)
    {
        // Arrange

        // Act
        var result = input.QuickSort();

        // Assert
        result.Should().Equal(expected);
    }

    [Fact]
    public void QuickSort_Returns_SortedCollection_UsingComparer()
    {
        // Arrange

        // Act
        var result = new[] { 1, 2, 3, 4, 5 }.QuickSort(new DescendingComparer());

        // Assert
        result.Should().Equal(5, 4, 3, 2, 1);
    }
}
