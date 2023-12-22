using DsaDotnet;
using FluentAssertions;

namespace Tests.Sorting;

public class MergeSortTests
{
    [Theory]
    [ClassData(typeof(SortIntArrayTestData))]
    public void MergeSort_Returns_SortedCollection(int[] input, int[] expected)
    {
        // Arrange

        // Act
        var result = input.MergeSort();

        // Assert
        result.Should().Equal(expected);
    }

    [Fact]
    public void MergeSort_Returns_SortedCollection_UsingComparer()
    {
        // Arrange

        // Act
        var result = new[] { 1, 2, 3, 4, 5 }.MergeSort(new DescendingComparer());

        // Assert
        result.Should().Equal(5, 4, 3, 2, 1);
    }
}
