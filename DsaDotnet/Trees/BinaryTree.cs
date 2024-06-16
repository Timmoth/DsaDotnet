namespace DsaDotnet.Trees;

public class BinaryTree<T> where T : IComparable<T>
{
    private readonly IComparer<T> _comparer;

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

    private TreeNode<T>? _root { get; set; }

    public void Insert(params T[] keys)
    {
        for (var i = 0; i < keys.Length; i++)
        {
            _root = InsertRec(_root, keys[i]);
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

    public TreeNode<T>? Search(T key)
    {
        return SearchRec(_root, key);
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
