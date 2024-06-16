using System.Numerics;

namespace DsaDotnet.Geometry
{
    /// <summary>
    /// Represents a triangle in two-dimensional space.
    /// </summary>
    public readonly struct Triangle
    {
        /// <summary>
        /// Gets the first vertex of the triangle.
        /// </summary>
        public Vector2 Vertex1 { get; }

        /// <summary>
        /// Gets the second vertex of the triangle.
        /// </summary>
        public Vector2 Vertex2 { get; }

        /// <summary>
        /// Gets the third vertex of the triangle.
        /// </summary>
        public Vector2 Vertex3 { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Triangle"/> struct.
        /// </summary>
        /// <param name="vertex1">The first vertex of the triangle.</param>
        /// <param name="vertex2">The second vertex of the triangle.</param>
        /// <param name="vertex3">The third vertex of the triangle.</param>
        public Triangle(Vector2 vertex1, Vector2 vertex2, Vector2 vertex3)
        {
            Vertex1 = vertex1;
            Vertex2 = vertex2;
            Vertex3 = vertex3;
        }

        /// <summary>
        /// Gets the area of the triangle.
        /// </summary>
        public float Area
        {
            get
            {
                return Math.Abs((Vertex1.X * (Vertex2.Y - Vertex3.Y) +
                                 Vertex2.X * (Vertex3.Y - Vertex1.Y) +
                                 Vertex3.X * (Vertex1.Y - Vertex2.Y)) / 2.0f);
            }
        }

        /// <summary>
        /// Gets the perimeter of the triangle.
        /// </summary>
        public float Perimeter
        {
            get
            {
                return Vector2.Distance(Vertex1, Vertex2) +
                       Vector2.Distance(Vertex2, Vertex3) +
                       Vector2.Distance(Vertex3, Vertex1);
            }
        }

        /// <summary>
        /// Gets the center of the triangle.
        /// </summary>
        public Vector2 Center
        {
            get
            {
                return new Vector2((Vertex1.X + Vertex2.X + Vertex3.X) / 3.0f,
                    (Vertex1.Y + Vertex2.Y + Vertex3.Y) / 3.0f);
            }
        }

        /// <summary>
        /// Determines whether the triangle contains the specified point.
        /// </summary>
        /// <param name="point">The point to check.</param>
        /// <returns><c>true</c> if the triangle contains the specified point; otherwise, <c>false</c>.</returns>
        public bool Contains(Vector2 point)
        {
            // Barycentric coordinate method
            var dX = point.X - Vertex3.X;
            var dY = point.Y - Vertex3.Y;
            var dX21 = Vertex3.X - Vertex2.X;
            var dY12 = Vertex2.Y - Vertex3.Y;
            var d = dY12 * (Vertex1.X - Vertex3.X) + dX21 * (Vertex1.Y - Vertex3.Y);
            var s = dY12 * dX + dX21 * dY;
            var t = (Vertex3.Y - Vertex1.Y) * dX + (Vertex1.X - Vertex3.X) * dY;

            if (d < 0) return s <= 0 && t <= 0 && s + t >= d;
            return s >= 0 && t >= 0 && s + t <= d;
        }

        /// <summary>
        /// Determines whether the triangle intersects with the specified other triangle.
        /// </summary>
        /// <param name="other">The other triangle to check.</param>
        /// <returns><c>true</c> if the triangle intersects with the specified other triangle; otherwise, <c>false</c>.</returns>
        public bool Intersects(Triangle other)
        {
            // Check if any of the vertices of the other triangle are inside this triangle
            if (Contains(other.Vertex1) || Contains(other.Vertex2) || Contains(other.Vertex3))
                return true;

            // Check if any of the vertices of this triangle are inside the other triangle
            if (other.Contains(Vertex1) || other.Contains(Vertex2) || other.Contains(Vertex3))
                return true;

            // More comprehensive intersection checks can be added as needed

            return false;
        }
    }
}
