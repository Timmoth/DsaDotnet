using DsaDotnet.Graphs;

namespace DsaDotnet;

public static partial class Search
{
    public static T? DepthFirstSearch<T, U>(this Graph<T, U> graph, U start, Predicate<T> predicate)
        where U : IEquatable<U> where T : class?, IGraphNode<T, U>
    {
        if (!graph.Nodes.TryGetValue(start, out var startNode))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }

        if (predicate(startNode))
        {
            // Start node matches predicate, exit early
            return startNode;
        }

        var visited = new HashSet<T>();
        var stack = new Stack<T>();

        stack.Push(startNode);
        visited.Add(startNode);

        while (stack.Count > 0)
        {
            var currentNode = stack.Pop();

            foreach (var neighbor in currentNode.GetNeighbors())
            {
                if (visited.Contains(neighbor))
                {
                    continue;
                }

                if (predicate(neighbor))
                {
                    return neighbor;
                }

                stack.Push(neighbor);
                visited.Add(neighbor);
            }
        }

        return null;
    }
}
