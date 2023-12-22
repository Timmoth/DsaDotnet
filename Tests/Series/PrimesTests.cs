using DsaDotnet;
using FluentAssertions;

namespace Tests.Series;

public class PrimesTests
{
    [Theory]
    [InlineData(10, new[] { 2, 3, 5, 7 })]
    [InlineData(20, new[] { 2, 3, 5, 7, 11, 13, 17, 19 })]
    [InlineData(50, new[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 })]
    public void Primes_Returns_CorrectValue(int n, int[] expected)
    {
        // Arrange

        // Act
        var result = n.PrimesUpTo();

        // Assert
        result.Should().Equal(expected);
    }
}
