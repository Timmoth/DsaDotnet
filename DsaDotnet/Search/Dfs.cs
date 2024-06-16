using DsaDotnet.Graphs;

namespace DsaDotnet;

public static partial class Search
{
    /// <summary>
    /// Performs a depth-first search on the graph starting from the specified node and using the given predicate.
    /// </summary>
    /// <typeparam name="T">The type of the graph nodes.</typeparam>
    /// <typeparam name="U">The type of the node identifier.</typeparam>
    /// <param name="graph">The graph to perform the search on.</param>
    /// <param name="start">The identifier of the starting node.</param>
    /// <param name="predicate">The predicate used to determine if a node matches the search criteria.</param>
    /// <returns>The first node that matches the search criteria, or null if no such node is found.</returns>
    /// <exception cref="ArgumentException">Thrown when the start node does not exist in the graph.</exception>
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
