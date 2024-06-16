A hierarchical data structure composed of nodes. Each node can have a left and right child node where left node is less than and the right node is greater than the parent node.

#### [Implementation](https://github.com/Timmoth/DsaDotnet/blob/main/DsaDotnet/Trees/BinaryTree.cs/)

#### Usage
```cs
 var tree = new BinaryTree<int>();
 tree.Insert(0, 1, 2, 3);
 var node = tree.Search(2);
```

#### [Tests](https://github.com/Timmoth/DsaDotnet/blob/main/Tests/Trees/BinaryTreeTests.cs)
