using DsaDotnet;
using FluentAssertions;

namespace Tests.Series;

public class FibonacciTests
{
    [Theory]
    [InlineData(0, 0)]
    [InlineData(1, 1)]
    [InlineData(2, 1)]
    [InlineData(3, 2)]
    [InlineData(4, 3)]
    [InlineData(5, 5)]
    [InlineData(10, 55)]
    [InlineData(15, 610)]
    [InlineData(20, 6765)]
    public void Fibonacci_Returns_CorrectValue(int n, uint expected)
    {
        // Arrange

        // Act
        var result = n.Fibonacci();

        // Assert
        result.Should().Be(expected);
    }

    [Fact]
    public void Fibonacci_MinusOne_Throws_ArgumentException()
    {
        // Arrange
        // Act
        // Assert
        Assert.Throws<ArgumentException>(() => (-1).Fibonacci());
    }
}
