namespace DsaDotnet.Trees;

/// <summary>
/// Represents a binary tree data structure.
/// </summary>
/// <typeparam name="T">The type of elements in the binary tree.</typeparam>
public class BinaryTree<T> where T : IComparable<T>
{
    private readonly IComparer<T> _comparer;

    /// <summary>
    /// Initializes a new instance of the <see cref="BinaryTree{T}"/> class.
    /// </summary>
    /// <param name="comparer">The comparer used to compare elements in the binary tree.</param>
    public BinaryTree(IComparer<T>? comparer = null)
    {
        if (comparer != null)
        {
            _comparer = comparer;
        }
        else
        {
            _comparer ??= Comparer<T>.Default;
        }
    }

    private TreeNode<T>? Root { get; set; }

    /// <summary>
    /// Inserts the specified keys into the binary tree.
    /// </summary>
    /// <param name="keys">The keys to insert.</param>
    public void Insert(params T[] keys)
    {
        for (var i = 0; i < keys.Length; i++)
        {
            Root = InsertRec(Root, keys[i]);
        }
    }

    private TreeNode<T> InsertRec(TreeNode<T>? node, T key)
    {
        if (node == null)
        {
            node = new TreeNode<T> { Key = key };
            return node;
        }

        var comparison = _comparer.Compare(key, node.Key);
        switch (comparison)
        {
            case < 0:
                node.Left = InsertRec(node.Left, key);
                break;
            case > 0:
                node.Right = InsertRec(node.Right, key);
                break;
        }

        return node;
    }

    /// <summary>
    /// Searches for the specified key in the binary tree.
    /// </summary>
    /// <param name="key">The key to search for.</param>
    /// <returns>The node containing the key, or null if the key is not found.</returns>
    public TreeNode<T>? Search(T key)
    {
        return SearchRec(Root, key);
    }

    private TreeNode<T>? SearchRec(TreeNode<T>? node, T key)
    {
        while (true)
        {
            if (node == null)
            {
                return node;
            }

            var comparison = _comparer.Compare(key, node.Key);

            switch (comparison)
            {
                case < 0:
                    node = node.Left;
                    continue;
                case > 0:
                    node = node.Right;
                    continue;
                default:
                    return node;
            }
        }
    }
}
