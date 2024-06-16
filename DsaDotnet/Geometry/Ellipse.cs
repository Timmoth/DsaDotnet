using System.Numerics;

namespace DsaDotnet.Geometry
{
    /// <summary>
    /// Represents an ellipse in two-dimensional space.
    /// </summary>
    public readonly struct Ellipse
    {
        /// <summary>
        /// Gets the center point of the ellipse.
        /// </summary>
        public Vector2 Center { get; }

        /// <summary>
        /// Gets the length of the major axis of the ellipse.
        /// </summary>
        public float MajorAxis { get; }

        /// <summary>
        /// Gets the length of the minor axis of the ellipse.
        /// </summary>
        public float MinorAxis { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Ellipse"/> struct.
        /// </summary>
        /// <param name="center">The center point of the ellipse.</param>
        /// <param name="majorAxis">The length of the major axis of the ellipse.</param>
        /// <param name="minorAxis">The length of the minor axis of the ellipse.</param>
        /// <exception cref="ArgumentOutOfRangeException">
        /// Thrown when <paramref name="majorAxis"/> or <paramref name="minorAxis"/> is less than or equal to zero.
        /// </exception>
        public Ellipse(Vector2 center, float majorAxis, float minorAxis)
        {
            if (majorAxis <= 0)
                throw new ArgumentOutOfRangeException(nameof(majorAxis), "Major axis must be positive.");
            if (minorAxis <= 0)
                throw new ArgumentOutOfRangeException(nameof(minorAxis), "Minor axis must be positive.");

            Center = center;
            MajorAxis = majorAxis;
            MinorAxis = minorAxis;
        }

        /// <summary>
        /// Gets the area of the ellipse.
        /// </summary>
        public double Area => Math.PI * MajorAxis * MinorAxis;

        /// <summary>
        /// Gets the circumference of the ellipse.
        /// </summary>
        public double Circumference => Math.PI * (3 * (MajorAxis + MinorAxis) - Math.Sqrt((3 * MajorAxis + MinorAxis) * (MajorAxis + 3 * MinorAxis)));
    }
}
