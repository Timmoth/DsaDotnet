using DsaDotnet;
using DsaDotnet.Text;
using FluentAssertions;

namespace Tests.Text;

public class LevenshteinDistanceTests
{
    [Theory]
    [InlineData("a", "b", 1)]
    [InlineData("", "", 0)]
    [InlineData("a", "", 1)]
    [InlineData("", "a", 1)]
    [InlineData("kitten", "sitting", 3)]
    [InlineData("flaw", "lawn", 2)]
    [InlineData("gumbo", "gambol", 2)]
    [InlineData("book", "back", 2)]
    [InlineData("apple", "apple", 0)]
    [InlineData("intention", "execution", 5)]
    [InlineData("sunday", "saturday", 3)]
    [InlineData("abcd", "abcd", 0)]
    [InlineData("abc", "yabc", 1)]
    [InlineData("yabc", "abc", 1)]
    [InlineData("abc", "abcx", 1)]
    [InlineData("abcx", "abc", 1)]
    public void LevenshteinDistance_Returns_CorrectValue(string a, string b, int expected)
    {
        // Arrange

        // Act
        var result = a.LevenshteinDistance(b);

        // Assert
        result.Should().Be(expected);
    }
}
