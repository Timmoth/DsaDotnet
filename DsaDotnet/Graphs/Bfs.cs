namespace DsaDotnet.Graphs;

public static partial class Traversal
{
    public static Node<T>? BreadthFirstSearch<T>(this Graph<T> graph, T start, Predicate<T> predicate) where T : notnull
    {
        if (!graph.Nodes.ContainsKey(start))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }


        var visited = new HashSet<T>();
        var queue = new Queue<Node<T>>();

        var startNode = graph.Nodes[start];
        queue.Enqueue(startNode);
        visited.Add(start);

        if (predicate(startNode.Data))
        {
            return startNode;
        }

        while (queue.Count > 0)
        {
            var currentNode = queue.Dequeue();

            foreach (var neighbor in currentNode.Neighbors.Keys)
            {
                if (visited.Contains(neighbor.Data))
                {
                    continue;
                }

                if (predicate(currentNode.Data))
                {
                    return neighbor;
                }

                queue.Enqueue(neighbor);
                visited.Add(neighbor.Data);
            }
        }

        return null;
    }
}
