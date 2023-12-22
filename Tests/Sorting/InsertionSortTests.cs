using DsaDotnet;
using FluentAssertions;

namespace Tests.Sorting;

public class InsertionSortTests
{
    [Theory]
    [ClassData(typeof(SortIntArrayTestData))]
    public void InsertionSort_Returns_SortedCollection(int[] input, int[] expected)
    {
        // Arrange

        // Act
        var result = input.InsertionSort();

        // Assert
        result.Should().Equal(expected);
    }

    [Fact]
    public void InsertionSort_Returns_SortedCollection_UsingComparer()
    {
        // Arrange

        // Act
        var result = new[] { 1, 2, 3, 4, 5 }.InsertionSort(new DescendingComparer());

        // Assert
        result.Should().Equal(5, 4, 3, 2, 1);
    }
}
