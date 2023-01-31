function previousLeftSibling(root, target) {
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;

    let prev = null;
    for (let i = 0; i < levelSize; i++) {
      const element = queue.shift();
      if (element === target) {
        return prev;
      }
      prev = element;
      for (child of element.children) {
        queue.push(child);
      }
    }
  }

  return null;
}
