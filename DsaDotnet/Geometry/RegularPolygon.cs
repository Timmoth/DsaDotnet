using System.Numerics;

namespace DsaDotnet.Geometry;

/// <summary>
/// Represents a regular polygon in 2D space.
/// </summary>
public readonly struct RegularPolygon
{
    /// <summary>
    /// Gets the center point of the regular polygon.
    /// </summary>
    public Vector2 Center { get; }

    /// <summary>
    /// Gets the number of sides of the regular polygon.
    /// </summary>
    public int Sides { get; }

    /// <summary>
    /// Gets the radius of the regular polygon.
    /// </summary>
    public float Radius { get; }

    /// <summary>
    /// Initializes a new instance of the <see cref="RegularPolygon"/> struct.
    /// </summary>
    /// <param name="center">The center point of the regular polygon.</param>
    /// <param name="sides">The number of sides of the regular polygon.</param>
    /// <param name="radius">The radius of the regular polygon.</param>
    /// <exception cref="ArgumentOutOfRangeException">
    /// Thrown when the number of sides is less than 3 or the radius is less than or equal to 0.
    /// </exception>
    public RegularPolygon(Vector2 center, int sides, float radius)
    {
        if (sides < 3)
            throw new ArgumentOutOfRangeException(nameof(sides), "A polygon must have at least 3 sides.");
        if (radius <= 0)
            throw new ArgumentOutOfRangeException(nameof(radius), "Radius must be positive.");

        Center = center;
        Sides = sides;
        Radius = radius;
    }

    /// <summary>
    /// Gets the vertices of the regular polygon.
    /// </summary>
    public IEnumerable<Vector2> Vertices
    {
        get
        {
            for (var i = 0; i < Sides; i++)
            {
                var angle = 2 * MathF.PI * i / Sides;
                yield return new Vector2(
                    Center.X + Radius * MathF.Cos(angle),
                    Center.Y + Radius * MathF.Sin(angle));
            }
        }
    }

    /// <summary>
    /// Gets the area of the regular polygon.
    /// </summary>
    public double Area => 0.5 * Sides * Radius * Radius * MathF.Sin(2 * MathF.PI / Sides);

    /// <summary>
    /// Gets the perimeter of the regular polygon.
    /// </summary>
    public double Perimeter => Sides * 2 * Radius * MathF.Sin(MathF.PI / Sides);
}
