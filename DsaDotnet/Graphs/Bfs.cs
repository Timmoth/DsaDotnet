namespace DsaDotnet.Graphs;

public static class Traversal
{
    public static List<T>? BreadthFirstSearch<T>(this Graph<T> graph, T start, Predicate<T> predicate) where T : notnull
    {
        if (!graph.Nodes.ContainsKey(start))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }

        var result = new List<T>();
        var visited = new HashSet<T>();
        var queue = new Queue<Node<T>>();

        queue.Enqueue(graph.Nodes[start]);
        visited.Add(start);

        while (queue.Count > 0)
        {
            var currentNode = queue.Dequeue();
            result.Add(currentNode.Data);

            if (predicate(currentNode.Data))
            {
                return result;
            }

            foreach (var neighbor in currentNode.Neighbors)
            {
                if (visited.Contains(neighbor.Data))
                {
                    continue;
                }

                queue.Enqueue(neighbor);
                visited.Add(neighbor.Data);
            }
        }

        return null;
    }
}
