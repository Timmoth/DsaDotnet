namespace DsaDotnet.Graphs;

public static partial class Traversal
{
    public static ICollection<Node<T>>? Dijkstra<T>(this Graph<T> graph, T start, Predicate<T> predicate) where T : notnull
    {
        if (!graph.Nodes.ContainsKey(start))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }

        var startNode = graph.Nodes[start];

        if (predicate(startNode.Data))
        {
            return new List<Node<T>>() { startNode };
        }
        var distances = new Dictionary<Node<T>, int>();
        var previous = new Dictionary<Node<T>, Node<T>>();
        var priorityQueue = new SortedDictionary<int, Node<T>>(); // Stores nodes by distance

        foreach (var node in graph.Nodes.Values)
        {
            distances[node] = int.MaxValue;
        }

        distances[graph.Nodes[start]] = 0;
        priorityQueue[0] = graph.Nodes[start];

        while (priorityQueue.Count > 0)
        {
            var current = priorityQueue.First().Value;
            priorityQueue.Remove(priorityQueue.First().Key);

            foreach (var neighbor in current.Neighbors)
            {
                var newDistance = distances[current] + neighbor.Value;
                if (newDistance >= distances[neighbor.Key])
                {
                    continue;
                }

                distances[neighbor.Key] = newDistance;
                previous[neighbor.Key] = current;
                priorityQueue[newDistance] = neighbor.Key;
            }
        }

        Node<T>? endNode = null;
        foreach (var node in graph.Nodes.Values)
        {
            if (!predicate(node.Data))
            {
                continue;
            }

            endNode = node;
            break;
        }

        // If no node satisfies the predicate, return null
        if (endNode == null || distances[endNode] == int.MaxValue)
            return null;

        // Reconstruct the shortest path
        var shortestPath = new List<Node<T>>();
        var c = endNode;
        while (c != null)
        {
            shortestPath.Add(c);
            c = previous.ContainsKey(c) ? previous[c] : null;
        }
        shortestPath.Reverse();

        return shortestPath;
    }
}
