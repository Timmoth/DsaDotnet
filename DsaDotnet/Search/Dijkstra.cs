using DsaDotnet.Graphs;

namespace DsaDotnet;

public static partial class Search
{
    public static ICollection<WeightedGraphNode<U>>? Dijkstra<U>(this WeightedGraph<U> graph, U start,
        Predicate<WeightedGraphNode<U>> predicate)
        where U : IEquatable<U>
    {
        if (!graph.Nodes.TryGetValue(start, out var startNode))
        {
            throw new ArgumentException("Start node does not exist in the graph.");
        }

        if (predicate(startNode))
        {
            // Start node matches predicate, exit early.
            return new List<WeightedGraphNode<U>> { startNode };
        }

        var distances = new Dictionary<WeightedGraphNode<U>, int>();
        var previous = new Dictionary<WeightedGraphNode<U>, WeightedGraphNode<U>>();
        var priorityQueue = new SortedDictionary<int, WeightedGraphNode<U>>(); // Stores nodes by distance

        WeightedGraphNode<U>? endNode = null;
        // Set distance to each node as the maximum
        foreach (var node in graph.Nodes.Values)
        {
            distances[node] = int.MaxValue;
            if (endNode == null && predicate(node))
            {
                endNode = node;
            }
        }

        // If no node satisfies the predicate, return null
        if (endNode == null)
        {
            return null;
        }

        // Distance to the start node is 0.
        distances[startNode] = 0;
        priorityQueue[0] = startNode;

        while (priorityQueue.Count > 0)
        {
            var current = priorityQueue.First();
            priorityQueue.Remove(current.Key);

            foreach (var (weight, neighbor) in current.Value.GetWeightedNeighbors())
            {
                var newDistance = distances[current.Value] + weight;
                if (newDistance >= distances[neighbor])
                {
                    continue;
                }

                distances[neighbor] = newDistance;
                previous[neighbor] = current.Value;
                priorityQueue[newDistance] = neighbor;
            }
        }

        // If no end node is un-reachable return null
        if (distances[endNode] == int.MaxValue)
        {
            return null;
        }

        // Reconstruct the shortest path
        var shortestPath = new List<WeightedGraphNode<U>>();
        var c = endNode;
        while (c != null)
        {
            shortestPath.Add(c);
            previous.TryGetValue(c, out c);
        }

        shortestPath.Reverse();

        return shortestPath;
    }
}
