namespace DsaDotnet.Graphs;

public static partial class Traversal
{
    public static Node<T>? DepthFirstSearch<T>(this Graph<T> graph, T start, Predicate<T> predicate) where T : notnull
    {
        if (!graph.Nodes.ContainsKey(start))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }

        var visited = new HashSet<T>();
        var stack = new Stack<Node<T>>();

        var startNode = graph.Nodes[start];
        stack.Push(startNode);
        visited.Add(start);

        if (predicate(startNode.Data))
        {
            return startNode;
        }

        while (stack.Count > 0)
        {
            var currentNode = stack.Pop();

            foreach (var neighbor in currentNode.Neighbors)
            {
                if (visited.Contains(neighbor.Data))
                {
                    continue;
                }

                if (predicate(neighbor.Data))
                {
                    return neighbor;
                }

                stack.Push(neighbor);
                visited.Add(neighbor.Data);
            }
        }

        return null;
    }
}
