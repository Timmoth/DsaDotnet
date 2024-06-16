using System.Numerics;

namespace DsaDotnet.Geometry
{
    public readonly record struct Circle
    {
        /// <summary>
        /// Gets the position of the center of the circle.
        /// </summary>
        public Vector2 Position { get; }
        /// <summary>
        /// Gets the radius of the circle.
        /// </summary>
        public float Radius { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Circle"/> struct.
        /// </summary>
        /// <param name="position">The position of the center of the circle.</param>
        /// <param name="radius">The radius of the circle.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the radius is negative.</exception>
        public Circle(Vector2 position, float radius)
        {
            if (radius < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(radius), "Circle radius cannot be negative.");
            }
            Position = position;
            Radius = radius;
        }

        /// <summary>
        /// Gets the area of the circle.
        /// </summary>
        public double Area => Math.PI * Radius * Radius;

        /// <summary>
        /// Gets the circumference of the circle.
        /// </summary>
        public double Circumference => 2 * Math.PI * Radius;

        /// <summary>
        /// Determines whether the circle contains the specified point.
        /// </summary>
        /// <param name="point">The point to check.</param>
        /// <returns><c>true</c> if the circle contains the point; otherwise, <c>false</c>.</returns>
        public bool Contains(Vector2 point)
        {
            return Vector2.Distance(Position, point) <= Radius;
        }

        /// <summary>
        /// Calculates the distance from the center of the circle to the specified point.
        /// </summary>
        /// <param name="point">The point to calculate the distance to.</param>
        /// <returns>The distance from the center of the circle to the point.</returns>
        public double DistanceToCenter(Vector2 point)
        {
            return Vector2.Distance(Position, point);
        }

        /// <summary>
        /// Determines whether the circle intersects with another circle.
        /// </summary>
        /// <param name="c2">The other circle to check for intersection.</param>
        /// <returns><c>true</c> if the circles intersect; otherwise, <c>false</c>.</returns>
        public bool Intersects(Circle c2)
        {
            var d = Vector2.Distance(Position, c2.Position);
            return d <= (Radius + c2.Radius) && d >= Math.Abs(Radius - c2.Radius);
        }

        /// <summary>
        /// Calculates the intersection points between this circle and another circle.
        /// </summary>
        /// <param name="c2">The other circle to calculate the intersection with.</param>
        /// <param name="intersectionPoints">The intersection points between the circles.</param>
        /// <returns><c>true</c> if the circles intersect; otherwise, <c>false</c>.</returns>
        public bool Intersect(Circle c2, out Vector2[] intersectionPoints)
        {
            var d = Vector2.Distance(Position, c2.Position);

            if (d > Radius + c2.Radius || d < Math.Abs(Radius - c2.Radius))
            {
                intersectionPoints = Array.Empty<Vector2>();
                return false;
            }

            var a = (Radius * Radius - c2.Radius * c2.Radius + d * d) / (2 * d);
            var h = (float)Math.Sqrt(Radius * Radius - a * a);

            var p2 = Position + a * (c2.Position - Position) / d;

            var intersection1 = new Vector2(
                p2.X + h * (c2.Position.Y - Position.Y) / d,
                p2.Y - h * (c2.Position.X - Position.X) / d
            );

            var intersection2 = new Vector2(
                p2.X - h * (c2.Position.Y - Position.Y) / d,
                p2.Y + h * (c2.Position.X - Position.X) / d
            );

            intersectionPoints = new[] { intersection1, intersection2 };
            return true;
        }
    }
}
