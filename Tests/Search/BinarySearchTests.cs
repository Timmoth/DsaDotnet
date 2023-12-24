using DsaDotnet;
using FluentAssertions;

namespace Tests.Search;

public class BinarySearchTests
{
    [Theory]
    [ClassData(typeof(SortedSearchTestData))]
    public void BinarySearch_Returns_Expected_Index(int[] source, int target, int expectedIndex)
    {
        // Arrange
        // Act
        var index = source.BinarySearch(target);

        // Assert
        index.Should().Be(expectedIndex);
    }
}
