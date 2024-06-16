
#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Geometry/Rectangle.cs)

#### Usage
```cs
var a = new Rectangle(Vector2.One, Vector2.One);
var b = new Rectangle(Vector2.Zero, Vector2.One);
var intersects = a.Intersects(b);
```