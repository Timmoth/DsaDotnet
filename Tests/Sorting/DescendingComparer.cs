// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

namespace Tests.Sorting;

public class DescendingComparer : IComparer<int>
{
    public int Compare(int x, int y)
    {
        // Compare y with x to sort in descending order
        return y.CompareTo(x);
    }
}
