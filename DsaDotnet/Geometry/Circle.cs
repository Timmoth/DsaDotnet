using System.Numerics;

namespace DsaDotnet.Geometry
{
    public readonly record struct Circle
    {
        public Vector2 Position { get; }
        public float Radius { get; }

        public Circle(Vector2 position, float radius)
        {
            if (radius < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(radius), "Radius cannot be negative.");
            }
            Position = position;
            Radius = radius;
        }

        public double Area => Math.PI * Radius * Radius;

        public double Circumference => 2 * Math.PI * Radius;

        public bool Contains(Vector2 point)
        {
            return Vector2.Distance(Position, point) <= Radius;
        }

        public double DistanceToCenter(Vector2 point)
        {
            return Vector2.Distance(Position, point);
        }

        public bool Intersects(Circle c2)
        {
            var d = Vector2.Distance(Position, c2.Position);
            return d <= (Radius + c2.Radius) && d >= Math.Abs(Radius - c2.Radius);
        }

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
