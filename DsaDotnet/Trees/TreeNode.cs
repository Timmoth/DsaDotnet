namespace DsaDotnet.Trees;

/// <summary>
/// Represents a node in a binary tree.
/// </summary>
/// <typeparam name="T">The type of the node's key.</typeparam>
public class TreeNode<T>
{
    /// <summary>
    /// Gets or sets the key of the node.
    /// </summary>
    public required T Key { get; init; }

    /// <summary>
    /// Gets or sets the left child of the node.
    /// </summary>
    public TreeNode<T>? Left { get; set; }

    /// <summary>
    /// Gets or sets the right child of the node.
    /// </summary>
    public TreeNode<T>? Right { get; set; }
}
