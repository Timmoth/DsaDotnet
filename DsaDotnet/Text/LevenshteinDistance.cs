namespace DsaDotnet.Text
{
    public static partial class TextAlgorithms
    {
        /// <summary>
        /// Calculates the Levenshtein distance between two strings.
        /// </summary>
        /// <param name="source">The source string.</param>
        /// <param name="target">The target string.</param>
        /// <returns>The Levenshtein distance between the source and target strings.</returns>
        /// <exception cref="ArgumentNullException">Thrown when either the source or target string is null.</exception>
        public static int LevenshteinDistance(this string source, string target)
        {
            if (source == null) throw new ArgumentNullException(nameof(source));
            if (target == null) throw new ArgumentNullException(nameof(target));

            var sourceLength = source.Length;
            var targetLength = target.Length;

            // Special cases
            if (sourceLength == 0) return targetLength;
            if (targetLength == 0) return sourceLength;

            // Create two work vectors
            var previousRow = new int[targetLength + 1];
            var currentRow = new int[targetLength + 1];

            // Initialize the previous row
            for (var j = 0; j <= targetLength; j++)
            {
                previousRow[j] = j;
            }

            // Iterate over the source characters
            for (var i = 1; i <= sourceLength; i++)
            {
                currentRow[0] = i;

                for (var j = 1; j <= targetLength; j++)
                {
                    var cost = (target[j - 1] == source[i - 1]) ? 0 : 1;

                    currentRow[j] = Math.Min(
                        Math.Min(currentRow[j - 1] + 1, previousRow[j] + 1),
                        previousRow[j - 1] + cost);
                }

                // Swap the rows
                (previousRow, currentRow) = (currentRow, previousRow);
            }

            // The last element of the previous row is the Levenshtein distance
            return previousRow[targetLength];
        }
    }
}
