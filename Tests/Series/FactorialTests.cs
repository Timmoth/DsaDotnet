using System.Numerics;
using DsaDotnet;
using DsaDotnet.Geometry;
using FluentAssertions;

namespace Tests.Series;

public class BfsTests
{
    [Theory]
    [InlineData(0, 1)]
    [InlineData(1, 1)]
    [InlineData(2, 2)]
    [InlineData(3, 6)]
    [InlineData(4, 24)]
    [InlineData(5, 120)]
    [InlineData(10, 3628800)]
    [InlineData(20, 2432902008176640000)]
    public void Factorial_Returns_CorrectValue(int n, ulong expected)
    {
        // Arrange
        var a = new Triangle(Vector2.One, Vector2.UnitX, Vector2.UnitY);
        var b = new Triangle(Vector2.Zero, Vector2.One, Vector2.UnitX);
        var intersects = a.Intersects(b);
        // Act
        var result = n.Factorial();

        // Assert
        result.Should().Be(expected);
    }

    [Theory]
    [InlineData(30, "265252859812191058636308480000000")]
    [InlineData(50, "30414093201713378043612608166064768844377641568960512000000000000")]
    [InlineData(75,
        "24809140811395398091946477116594033660926243886570122837795894512655842677572867409443815424000000000000000000")]
    [InlineData(100,
        "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000")]
    public void BigFactorial_Returns_CorrectValue(int n, string expectedStr)
    {
        // Arrange
        var expected = BigInteger.Parse(expectedStr);

        // Act
        var result = n.Factorial();

        // Assert
        result.Should().Be(expected);
    }

    [Fact]
    public void Factorial_MinusOne_Throws_ArgumentException()
    {
        // Arrange
        // Act
        // Assert
        Assert.Throws<ArgumentException>(() => (-1).Factorial());
    }
}
