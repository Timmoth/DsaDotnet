using DsaDotnet;
using FluentAssertions;

namespace Tests.Search;

public class LinearSearchTests
{
    [Theory]
    [ClassData(typeof(SortedSearchTestData))]
    [ClassData(typeof(UnsortedSearchTestData))]
    public void LinearSearch_Returns_Expected_Index(int[] source, int target, int expectedIndex)
    {
        // Arrange
        // Act
        var index = source.LinearSearch(target);

        // Assert
        index.Should().Be(expectedIndex);
    }
}
