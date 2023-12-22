// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

namespace Tests.Sorting;

public class SortIntArrayTestData : TheoryData<int[], int[]>
{
    public SortIntArrayTestData()
    {
        Add(new int[] { }, new int[] { });
        Add(new[] { 1 }, new[] { 1 });
        Add(new[] { 2, 1 }, new[] { 1, 2 });
        Add(new[] { 2, -2, 1, -1, 0 }, new[] { -2, -1, 0, 1, 2 });
        Add(new[] { 1, 2, 3, 4, 5 }, new[] { 1, 2, 3, 4, 5 });
        Add(new[] { 5, 4, 3, 2, 1 }, new[] { 1, 2, 3, 4, 5 });
        Add(new[] { 5, 3, 7, 2, 8, 10, 1, 6, 4, 9 }, new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });
    }
}
