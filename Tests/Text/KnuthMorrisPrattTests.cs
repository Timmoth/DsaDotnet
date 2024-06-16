using DsaDotnet;
using DsaDotnet.Text;
using FluentAssertions;

namespace Tests.Text;

public class KnuthMorrisPrattTests
{
    [Theory]
    [InlineData("abxabcabcaby", "abcaby", 6)]
    [InlineData("ababababababababab", "abab", 0)]
    [InlineData("abcabcabcabcabc", "abc", 0)]
    [InlineData("abcdefg", "xyz", -1)]
    [InlineData("aaaaa", "aa", 0)]
    [InlineData("abcde", "", -1)]
    [InlineData("", "abc", -1)]
    [InlineData("abc", "abcd", -1)]
    public void KnuthMorrisPratt_Returns_CorrectValue(string a, string b, int expected)
    {
        // Arrange

        // Act
        var result = a.KmpSearch(b);

        // Assert
        result.Should().Be(expected);
    }
}
