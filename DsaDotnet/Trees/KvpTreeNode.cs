namespace DsaDotnet.Trees;

/// <summary>
/// Represents a key-value pair tree node.
/// </summary>
/// <typeparam name="T">The type of the key.</typeparam>
/// <typeparam name="V">The type of the value.</typeparam>
public class KvpTreeNode<T, V>
{
    /// <summary>
    /// Gets or sets the key.
    /// </summary>
    public required T Key { get; set; }

    /// <summary>
    /// Gets or sets the value.
    /// </summary>
    public required V Value { get; set; }

    /// <summary>
    /// Gets or sets the left child node.
    /// </summary>
    public KvpTreeNode<T, V>? Left { get; set; }

    /// <summary>
    /// Gets or sets the right child node.
    /// </summary>
    public KvpTreeNode<T, V>? Right { get; set; }
}
