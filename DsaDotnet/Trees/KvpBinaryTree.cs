
namespace DsaDotnet.Trees;

/// <summary>
/// Represents a binary tree that stores key-value pairs.
/// </summary>
/// <typeparam name="T">The type of the keys.</typeparam>
/// <typeparam name="V">The type of the values.</typeparam>
public class KvpBinaryTree<T, V> where T : IComparable<T>
{
    private readonly IComparer<T> _comparer;

    /// <summary>
    /// Initializes a new instance of the <see cref="KvpBinaryTree{T, V}"/> class.
    /// </summary>
    /// <param name="comparer">The comparer used to compare keys. If null, the default comparer will be used.</param>
    public KvpBinaryTree(IComparer<T>? comparer = null)
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

    /// <summary>
    /// Gets the number of key-value pairs stored in the tree.
    /// </summary>
    public long Count { get; private set; }

    private KvpTreeNode<T, V>? Root { get; set; }

    /// <summary>
    /// Inserts a key-value pair into the tree.
    /// </summary>
    /// <param name="key">The key to insert.</param>
    /// <param name="value">The value to insert.</param>
    /// <returns>True if the key-value pair was inserted successfully, false otherwise.</returns>
    public bool Insert(T key, V value)
    {
        return InsertRec(Root, key, value);
    }

    private bool InsertRec(KvpTreeNode<T, V>? node, T key, V value)
    {
        if (node == null)
        {
            Root = new KvpTreeNode<T, V> { Key = key, Value = value };
            Count++;
            return true;
        }

        while (true)
        {
            var comparison = _comparer.Compare(key, node.Key);

            if (comparison < 0)
            {
                if (node.Left == null)
                {
                    node.Left = new KvpTreeNode<T, V> { Key = key, Value = value };
                    break;
                }

                node = node.Left;
            }
            else if (comparison > 0)
            {
                if (node.Right == null)
                {
                    node.Right = new KvpTreeNode<T, V> { Key = key, Value = value };
                    break;
                }

                node = node.Right;
            }
            else
            {
                return false;
            }
        }

        return true;
    }

    /// <summary>
    /// Removes a node from the tree.
    /// </summary>
    /// <param name="node">The node to remove.</param>
    /// <returns>True if the node was removed successfully, false otherwise.</returns>
    public bool Remove(KvpTreeNode<T, V> node)
    {
        Root = RemoveRec(Root, node);
        Count--;

        return true;
    }

    private KvpTreeNode<T, V>? RemoveRec(KvpTreeNode<T, V>? root, KvpTreeNode<T, V> node)
    {
        if (root == null)
        {
            return null;
        }

        var comparison = _comparer.Compare(node.Key, root.Key);
        if (comparison < 0)
        {
            root.Left = RemoveRec(root.Left, node);
        }
        else if (comparison > 0)
        {
            root.Right = RemoveRec(root.Right, node);
        }
        else
        {
            if (root.Left == null)
            {
                return root.Right;
            }

            if (root.Right == null)
            {
                return root.Left;
            }

            var successor = GetSuccessor(root.Right);
            root.Key = successor.Key;
            root.Value = successor.Value;
            root.Right = RemoveRec(root.Right, successor);
        }

        return root;
    }

    private KvpTreeNode<T, V> GetSuccessor(KvpTreeNode<T, V> node)
    {
        var current = node;
        while (current.Left != null)
        {
            current = current.Left;
        }
        return current;
    }

    /// <summary>
    /// Searches for a node with the specified key in the tree.
    /// </summary>
    /// <param name="key">The key to search for.</param>
    /// <returns>The node with the specified key, or null if the key was not found.</returns>
    public KvpTreeNode<T, V>? Search(T key)
    {
        return SearchRec(Root, key);
    }

    private KvpTreeNode<T, V>? SearchRec(KvpTreeNode<T, V>? node, T key)
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

    /// <summary>
    /// Performs an in-order traversal of the tree and returns the key-value pairs in sorted order.
    /// </summary>
    /// <returns>An enumerable collection of key-value pairs in sorted order.</returns>
    public IEnumerable<(T key, V value)> InOrderTraversal()
    {
        if (Root == null)
        {
            yield break;
        }

        var stack = new Stack<KvpTreeNode<T, V>>();
        var currentNode = Root;

        // Traverse the tree
        while (currentNode != null || stack.Count > 0)
        {
            // Reach the leftmost Node
            while (currentNode != null)
            {
                stack.Push(currentNode);
                currentNode = currentNode.Left;
            }

            currentNode = stack.Pop();

            yield return (currentNode.Key, currentNode.Value);

            // We have visited the node and its
            // left subtree. Now, it's the right subtree's turn
            currentNode = currentNode.Right;
        }
    }

    /// <summary>
    /// Finds the node in the tree that is closest to the specified key.
    /// </summary>
    /// <param name="x">The key to find the closest node for.</param>
    /// <returns>The node in the tree that is closest to the specified key.</returns>
    public KvpTreeNode<T, V>? FindClosestNode(T x)
    {
        var node = Root;
        KvpTreeNode<T, V>? closestNode = null;

        while (node != null)
        {
            var cmp = _comparer.Compare(x, node.Key);

            if (cmp == 0)
            {
                return node; // Found exact match
            }

            closestNode = node;
            // Decide which subtree to explore
            if (cmp < 0)
            {
                // If the current node is in between two leaf nodes, stop
                if (node.Left == null || _comparer.Compare(x, node.Left.Key) > 0)
                    break;

                node = node.Left;
            }
            else
            {
                // If the current node is in between two leaf nodes, stop
                if (node.Right == null || _comparer.Compare(x, node.Right.Key) < 0)
                    break;

                node = node.Right;
            }
        }

        return closestNode;
    }

    /// <summary>
    /// Performs an in-order traversal of the tree and returns the nodes in a list.
    /// </summary>
    /// <param name="node">The root node of the tree.</param>
    /// <returns>A list of nodes in the tree in sorted order.</returns>
    public static List<KvpTreeNode<T, V>> InOrderTraversalToList(KvpTreeNode<T, V>? node)
    {
        var list = new List<KvpTreeNode<T, V>>();
        InOrderTraversal(node, list);
        return list;
    }

    private static void InOrderTraversal(KvpTreeNode<T, V>? node, List<KvpTreeNode<T, V>> list)
    {
        while (true)
        {
            if (node == null) return;
            InOrderTraversal(node.Left, list);
            list.Add(node);
            node = node.Right;
        }
    }

    /// <summary>
    /// Builds a balanced binary tree from a list of nodes.
    /// </summary>
    /// <param name="nodes">The list of nodes.</param>
    /// <param name="start">The start index of the sublist.</param>
    /// <param name="end">The end index of the sublist.</param>
    /// <returns>The root node of the balanced binary tree.</returns>
    public static KvpTreeNode<T, V>? BuildBalancedTree(List<KvpTreeNode<T, V>> nodes, int start, int end)
    {
        if (start > end) return null;

        var mid = (start + end) / 2;
        var node = nodes[mid];

        node.Left = BuildBalancedTree(nodes, start, mid - 1);
        node.Right = BuildBalancedTree(nodes, mid + 1, end);

        return node;
    }

    /// <summary>
    /// Rebalances the tree by building a new balanced binary tree from the existing nodes.
    /// </summary>
    public void Rebalance()
    {
        var (root, count) = RebalanceTree(Root);
        Root = root;
        Count = count;
    }

    private (KvpTreeNode<T, V>? root, long count) RebalanceTree(KvpTreeNode<T, V>? root)
    {
        if (root == null) return (null, 0);

        var nodesList = InOrderTraversalToList(root);

        return (BuildBalancedTree(nodesList, 0, nodesList.Count - 1), nodesList.Count);
    }
}
