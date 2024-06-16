using System.Numerics;

namespace DsaDotnet.Geometry
{
    /// <summary>
    /// Represents a polygon in 2D space.
    /// </summary>
    public readonly struct Polygon
    {
        /// <summary>
        /// Gets the vertices of the polygon.
        /// </summary>
        public Vector2[] Vertices { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Polygon"/> struct.
        /// </summary>
        /// <param name="vertices">The vertices of the polygon.</param>
        public Polygon(Vector2[] vertices)
        {
            Vertices = vertices;
        }

        /// <summary>
        /// Calculates the area of the polygon.
        /// </summary>
        /// <returns>The area of the polygon.</returns>
        public double Area()
        {
            double area = 0;
            var count = Vertices.Length;

            for (var i = 0; i < count; i++)
            {
                var current = Vertices[i];
                var next = Vertices[(i + 1) % count];
                area += current.X * next.Y - next.X * current.Y;
            }

            return Math.Abs(area) / 2.0;
        }

        /// <summary>
        /// Calculates the perimeter of the polygon.
        /// </summary>
        /// <returns>The perimeter of the polygon.</returns>
        public double Perimeter()
        {
            double perimeter = 0;
            var count = Vertices.Length;

            for (var i = 0; i < count; i++)
            {
                var current = Vertices[i];
                var next = Vertices[(i + 1) % count];
                perimeter += Vector2.Distance(current, next);
            }

            return perimeter;
        }

        /// <summary>
        /// Determines whether the specified point is inside the polygon.
        /// </summary>
        /// <param name="point">The point to check.</param>
        /// <returns><c>true</c> if the point is inside the polygon; otherwise, <c>false</c>.</returns>
        public bool IsPointInside(Vector2 point)
        {
            var result = false;
            var count = Vertices.Length;

            for (int i = 0, j = count - 1; i < count; j = i++)
            {
                if ((Vertices[i].Y > point.Y) != (Vertices[j].Y > point.Y) &&
                    (point.X < (Vertices[j].X - Vertices[i].X) * (point.Y - Vertices[i].Y) / (Vertices[j].Y - Vertices[i].Y) + Vertices[i].X))
                {
                    result = !result;
                }
            }

            return result;
        }

        /// <summary>
        /// Calculates the bounding box of the polygon.
        /// </summary>
        /// <returns>The minimum and maximum coordinates of the bounding box.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the polygon has no vertices.</exception>
        public (Vector2 min, Vector2 max) BoundingBox()
        {
            if (Vertices.Length == 0)
                throw new InvalidOperationException("Polygon has no vertices.");

            var min = Vertices[0];
            var max = Vertices[0];

            foreach (var vertex in Vertices)
            {
                min.X = Math.Min(min.X, vertex.X);
                min.Y = Math.Min(min.Y, vertex.Y);
                max.X = Math.Max(max.X, vertex.X);
                max.Y = Math.Max(max.Y, vertex.Y);
            }

            return (min, max);
        }
    }
}
