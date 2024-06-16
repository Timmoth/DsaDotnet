using System.Numerics;
using DsaDotnet.Geometry;
using FluentAssertions;

namespace Tests.Geometry;

public class CircleTests
{
    [Fact]
    public void Circle_Area_Throws_When_Negative_Radius()
    {
        // Arrange
        // Act
        // Assert
        Assert.Throws<ArgumentOutOfRangeException>(() => new Circle(Vector2.One, -1));
    }

    [Theory]
    [InlineData(0, 0, 0, 0)]
    [InlineData(0, 0, 1, 3.14159)]
    [InlineData(0, 0, 5, 78.53982)]
    [InlineData(2, 3, 4, 50.26548)]
    [InlineData(-1, -1, 2, 12.56637)]
    public void Circle_Area_Returns_CorrectValue(float x, float y, float r, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var area = sut.Area;

        // Assert
        area.Should().BeApproximately(expected, 0.0001f);
    }

    [Theory]
    [InlineData(0, 0, 0, 0)]
    [InlineData(0, 0, 1, 6.28319)]
    [InlineData(0, 0, 5, 31.41593)]
    [InlineData(2, 3, 4, 25.13274)]
    [InlineData(-1, -1, 2, 12.56637)]
    public void Circle_Circumference_Returns_CorrectValue(float x, float y, float r, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var circumference = sut.Circumference;

        // Assert
        circumference.Should().BeApproximately(expected, 0.0001f);
    }

    [Theory]
    [InlineData(0, 0, 0, 0)]
    [InlineData(0, 0, 1, 0)]
    [InlineData(0, 0, 5, 0)]
    [InlineData(2, 3, 4, 2)]
    [InlineData(-1, -1, 2, -1)]
    public void Circle_CenterX_Returns_CorrectValue(float x, float y, float r, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var centerX = sut.Position.X;

        // Assert
        centerX.Should().Be(expected);
    }

    [Theory]
    [InlineData(0, 0, 0, 0)]
    [InlineData(0, 0, 1, 0)]
    [InlineData(0, 0, 5, 0)]
    [InlineData(2, 3, 4, 3)]
    [InlineData(-1, -1, 2, -1)]
    public void Circle_CenterY_Returns_CorrectValue(float x, float y, float r, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var centerY = sut.Position.Y;

        // Assert
        centerY.Should().Be(expected);
    }

    [Theory]
    [InlineData(0, 0, 0, 0)]
    [InlineData(0, 0, 1, 1)]
    [InlineData(0, 0, 5, 5)]
    [InlineData(2, 3, 4, 4)]
    [InlineData(-1, -1, 2, 2)]
    public void Circle_Radius_Returns_CorrectValue(float x, float y, float r, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var radius = sut.Radius;

        // Assert
        radius.Should().Be(expected);
    }

    [Theory]
    [InlineData(0, 0, 0, 1, 1, 1.41421353)]
    [InlineData(0, 0, 1, -1, -1, 1.41421353)]
    [InlineData(-1, -1, 2, -1, 2, 3.0)]
    public void Circle_DistanceToCenter_Returns_CorrectValue(float x, float y, float r, float pX, float pY, float expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var result = sut.DistanceToCenter(new Vector2(pX, pY));

        // Assert
        result.Should().BeApproximately(expected, 0.0001f);
    }

    [Theory]
    [InlineData(0, 0, 0, 1, 1, false)]
    [InlineData(0, 0, 2, -1, -1, true)]
    [InlineData(-1, -1, 2, -1, 2, false)]
    public void Circle_Contains_Returns_CorrectValue(float x, float y, float r, float pX, float pY, bool expected)
    {
        // Arrange
        var sut = new Circle(new Vector2(x, y), r);

        // Act
        var result = sut.Contains(new Vector2(pX, pY));

        // Assert
        result.Should().Be(expected);
    }
}
