using FluentAssertions;

namespace Tests.Arithmetic;

public class GCDTests
{
    [Theory]
    [InlineData(10, 5, 5)]
    [InlineData(14, 28, 14)]
    [InlineData(17, 23, 1)]
    [InlineData(0, 5, 5)]
    [InlineData(0, 0, 0)]
    [InlineData(18, -6, 6)]
    [InlineData(-24, -36, 12)]
    public void GCD_Returns_CorrectValue(int a, int b, int expected)
    {
        // Arrange
        // Act
        var result = DsaDotnet.Arithmetic.GCD(a, b);

        // Assert
        result.Should().Be(expected);
    }
}
