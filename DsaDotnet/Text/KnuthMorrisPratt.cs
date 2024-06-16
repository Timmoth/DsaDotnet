namespace DsaDotnet.Text
{
    public static partial class TextAlgorithms
    {
        /// <summary>
        /// Builds the Knuth-Morris-Pratt (KMP) table for a given pattern.
        /// </summary>
        /// <param name="pattern">The pattern to build the KMP table for.</param>
        /// <returns>The KMP table.</returns>
        private static int[] BuildKmpTable(string pattern)
        {
            var table = new int[pattern.Length];
            var j = 0;

            for (var i = 1; i < pattern.Length; i++)
            {
                if (pattern[i] == pattern[j])
                {
                    table[i] = ++j;
                }
                else
                {
                    if (j != 0)
                    {
                        j = table[j - 1];
                        i--; // Since i will be incremented in the next iteration
                    }
                    else
                    {
                        table[i] = 0;
                    }
                }
            }

            return table;
        }

        /// <summary>
        /// Performs the Knuth-Morris-Pratt (KMP) search algorithm to find the first occurrence of a pattern in a given text.
        /// </summary>
        /// <param name="text">The text to search in.</param>
        /// <param name="pattern">The pattern to search for.</param>
        /// <returns>The starting index of the first occurrence of the pattern in the text, or -1 if no match is found.</returns>
        public static int KmpSearch(this string text, string pattern)
        {
            if (string.IsNullOrEmpty(text)) return -1;
            if (string.IsNullOrEmpty(pattern)) return -1;
            if (pattern.Length > text.Length) return -1;

            var kmpTable = BuildKmpTable(pattern);
            var i = 0; // index for text
            var j = 0; // index for pattern

            while (i < text.Length)
            {
                if (text[i] == pattern[j])
                {
                    i++;
                    j++;

                    if (j == pattern.Length)
                    {
                        return i - j; // match found, return the starting index
                    }
                }
                else
                {
                    if (j != 0)
                    {
                        j = kmpTable[j - 1];
                    }
                    else
                    {
                        i++;
                    }
                }
            }

            return -1; // no match found
        }
    }
}
