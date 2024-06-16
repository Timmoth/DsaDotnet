using DsaDotnet.Trees;
using FluentAssertions;

namespace Tests.Trees;

public class BinaryTreeTests
{
    [Theory]
    [InlineData(new[] { 0 }, 0)]
    [InlineData(new[] { 0, 1, 2 }, 1)]
    [InlineData(new[] { 2, 1, 0, 3, 4 }, 3)]
    public void Binary_Tree_Search_Returns_Correct_Node(int[] elements, int searchKey)
    {
        // Arrange
        var tree = new BinaryTree<int>();
        tree.Insert(elements);

        // Act
        var node = tree.Search(searchKey);

        // Assert
        node!.Key.Should().Be(searchKey);
    }
}
