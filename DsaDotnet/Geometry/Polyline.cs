using System.Numerics;

namespace DsaDotnet.Geometry
{
    /// <summary>
    /// Represents a polyline in two-dimensional space.
    /// </summary>
    public readonly struct Polyline
    {
        /// <summary>
        /// Gets the array of points that make up the polyline.
        /// </summary>
        public Vector2[] Points { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="PolyLine"/> struct.
        /// </summary>
        /// <param name="points">The array of points that make up the polyline.</param>
        public Polyline(Vector2[] points)
        {
            Points = points;
        }

        /// <summary>
        /// Calculates the length of the polyline.
        /// </summary>
        /// <returns>The length of the polyline.</returns>
        public float Length()
        {
            float length = 0;
            for (var i = 1; i < Points.Length; i++)
            {
                length += Vector2.Distance(Points[i - 1], Points[i]);
            }
            return length;
        }

        /// <summary>
        /// Determines whether the polyline intersects with the specified point.
        /// </summary>
        /// <param name="point">The point to check for intersection.</param>
        /// <returns><c>true</c> if the polyline intersects with the point; otherwise, <c>false</c>.</returns>
        public bool Intersects(Vector2 point)
        {
            for (var i = 1; i < Points.Length; i++)
            {
                if (PointOnSegment(point, Points[i - 1], Points[i]))
                    return true;
            }
            return false;
        }

        private bool PointOnSegment(Vector2 p, Vector2 q, Vector2 r)
        {
            return p.X <= Math.Max(q.X, r.X) && p.X >= Math.Min(q.X, r.X) &&
                   p.Y <= Math.Max(q.Y, r.Y) && p.Y >= Math.Min(q.Y, r.Y);
        }

        /// <summary>
        /// Calculates the bounding box of the polyline.
        /// </summary>
        /// <returns>A tuple containing the minimum and maximum points of the bounding box.</returns>
        public (Vector2 min, Vector2 max) BoundingBox()
        {
            if (Points.Length == 0)
                throw new InvalidOperationException("Polyline has no points.");

            var min = Points[0];
            var max = Points[0];

            for (var i = 1; i < Points.Length; i++)
            {
                min.X = Math.Min(min.X, Points[i].X);
                min.Y = Math.Min(min.Y, Points[i].Y);
                max.X = Math.Max(max.X, Points[i].X);
                max.Y = Math.Max(max.Y, Points[i].Y);
            }

            return (min, max);
        }
    }
}
