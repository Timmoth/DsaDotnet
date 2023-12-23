using FluentAssertions;

namespace Tests.Arithmetic;

public class LCMTests
{
    [Theory]
    [InlineData(3, 5, 15)]
    [InlineData(7, 11, 77)]
    [InlineData(17, 23, 391)]
    [InlineData(0, 5, 0)]
    [InlineData(0, 0, 0)]
    [InlineData(18, -6, 18)]
    [InlineData(-24, -36, 72)]
    public void LCM_Returns_CorrectValue(int a, int b, int expected)
    {
        // Arrange
        // Act
        var result = DsaDotnet.Arithmetic.LCM(a, b);

        // Assert
        result.Should().Be(expected);
    }

    [Theory]
    [InlineData(new int[] { 3, 5 }, 15)]
    [InlineData(new int[] { 7, 11, 13 }, 1001)]
    [InlineData(new int[] { 2, 4, 8 }, 8)]
    [InlineData(new int[] { 3, 6, 9, 12 }, 36)]
    [InlineData(new int[] { 5, 10, 15, 20, 25 }, 300)]
    [InlineData(new int[] { 0, 5, 10 }, 0)]
    [InlineData(new int[] { -3, -6, -9, -12 }, 36)]
    [InlineData(new int[] { -4, -8, 16, -32 }, 32)]
    [InlineData(new int[] { }, 0)]
    public void LCM_Array_Returns_CorrectValue(int[] numbers, int expected)
    {
        // Arrange
        // Act
        var result = DsaDotnet.Arithmetic.LCM(numbers);

        // Assert
        result.Should().Be(expected);
    }
}
