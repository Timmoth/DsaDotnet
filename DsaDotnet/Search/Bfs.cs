using DsaDotnet.Graphs;

namespace DsaDotnet;

public static partial class Search
{
    /// <summary>
    /// Performs a breadth-first search on the specified graph starting from the given node and using the provided predicate.
    /// </summary>
    /// <typeparam name="T">The type of the graph.</typeparam>
    /// <typeparam name="U">The type of the graph nodes.</typeparam>
    /// <param name="graph">The graph to perform the search on.</param>
    /// <param name="start">The starting node.</param>
    /// <param name="predicate">The predicate used to determine if a node matches the search criteria.</param>
    /// <returns>The first node that matches the search criteria, or null if no such node is found.</returns>
    /// <exception cref="ArgumentException">Thrown when the start node does not exist in the graph.</exception>
    public static T? BreadthFirstSearch<T, U>(this Graph<T, U> graph, U start, Predicate<T> predicate)
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
