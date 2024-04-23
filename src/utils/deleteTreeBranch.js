export function deleteTreeBranch(id, tree) {
  const newTree = [];
  tree.forEach(function (item) {
    if (!item.id.startsWith(id)) {
      newTree.push(item);
    }
  });
  tree = newTree;
  return tree;
}
