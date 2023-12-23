namespace DsaDotnet.Graphs;

public static partial class Traversal
{
    public static T? BreadthFirstSearch<T, U>(this Graph<T, U> graph, U start, Predicate<T> predicate)
        where U : IEquatable<U> where T : class?, INode<T, U>
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
        var queue = new Queue<T>();

        queue.Enqueue(startNode);
        visited.Add(startNode);

        while (queue.Count > 0)
        {
            var currentNode = queue.Dequeue();

            foreach (var neighbor in currentNode.GetNeighbors())
            {
                if (visited.Contains(neighbor))
                {
                    continue;
                }

                if (predicate(currentNode))
                {
                    return neighbor;
                }

                queue.Enqueue(neighbor);
                visited.Add(neighbor);
            }
        }

        return null;
    }
}
