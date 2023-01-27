function getHeight(tree) {
  if (!tree) {
    return 0;
  }

  let length = 0;
  let queue = [tree];

  while (queue.length) {
    let size = queue.length;
    while (size) {
      const element = queue.shift();
      for (let i = 0; i < element.children.length; i++) {
        queue.push(element.children[i]);
      }
      size--;
    }
    length += 1;
  }

  return length;
}

function getHeightRecursive(tree) {
  if (!tree) {
    return 0;
  }

  if (!tree.children.length) {
    return 1;
  }

  let maxHeight = 0;
  for (let child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeightRecursive(child) + 1);
  }

  return maxHeight;
}
