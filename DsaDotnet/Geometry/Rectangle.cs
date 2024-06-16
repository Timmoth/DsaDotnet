using System.Numerics;

namespace DsaDotnet.Geometry
{
    public readonly record struct Rectangle
    {
        /// <summary>
        /// Gets the position of the top-left corner of the rectangle.
        /// </summary>
        public Vector2 Position { get; }
        /// <summary>
        /// Gets the size of the rectangle.
        /// </summary>
        public Vector2 Size { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Rectangle"/> struct.
        /// </summary>
        /// <param name="position">The position of the top-left corner of the rectangle.</param>
        /// <param name="size">The size of the rectangle.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the width or height of the rectangle is negative.</exception>
        public Rectangle(Vector2 position, Vector2 size)
        {
            if (size.X < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(size.X), "Rectangle width cannot be negative.");
            }

            if (size.Y < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(size.Y), "Rectangle height cannot be negative.");
            }

            Position = position;
            Size = size;
        }

        /// <summary>
        /// Gets the area of the rectangle.
        /// </summary>
        public float Area => Size.X * Size.Y;

        /// <summary>
        /// Gets the perimeter of the rectangle.
        /// </summary>
        public float Perimeter => 2 * (Size.X + Size.Y);

        /// <summary>
        /// Determines whether the rectangle contains the specified point.
        /// </summary>
        /// <param name="point">The point to check.</param>
        /// <returns><c>true</c> if the rectangle contains the point; otherwise, <c>false</c>.</returns>
        public bool Contains(Vector2 point)
        {
            return point.X >= Position.X && point.X <= Position.X + Size.X &&
                   point.Y >= Position.Y && point.Y <= Position.Y + Size.Y;
        }

        /// <summary>
        /// Determines whether the rectangle intersects with another rectangle.
        /// </summary>
        /// <param name="other">The other rectangle to check.</param>
        /// <returns><c>true</c> if the rectangles intersect; otherwise, <c>false</c>.</returns>
        public bool Intersects(Rectangle other)
        {
            return !(other.Position.X > Position.X + Size.X || other.Position.X + other.Size.X < Position.X ||
                     other.Position.Y > Position.Y + Size.Y || other.Position.Y + other.Size.Y < Position.Y);
        }

        /// <summary>
        /// Calculates the intersection of the rectangle with another rectangle.
        /// </summary>
        /// <param name="other">The other rectangle to intersect with.</param>
        /// <returns>The intersection rectangle, or <c>null</c> if there is no intersection.</returns>
        public Rectangle? Intersection(Rectangle other)
        {
            var x1 = Math.Max(Position.X, other.Position.X);
            var y1 = Math.Max(Position.Y, other.Position.Y);
            var x2 = Math.Min(Position.X + Size.X, other.Position.X + other.Size.X);
            var y2 = Math.Min(Position.Y + Size.Y, other.Position.Y + other.Size.Y);

            if (x2 >= x1 && y2 >= y1)
            {
                return new Rectangle(new Vector2(x1, y1), new Vector2(x2 - x1, y2 - y1));
            }

            return null; // No intersection
        }

        /// <summary>
        /// Gets the center point of the rectangle.
        /// </summary>
        public Vector2 Center => new(Position.X + Size.X / 2, Position.Y + Size.Y / 2);
    }

}
