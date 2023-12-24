namespace DsaDotnet.Trees;

public class TreeNode<T>
{
    public required T Key { get; init; }
    public TreeNode<T>? Left { get; set; }
    public TreeNode<T>? Right { get; set; }
}
