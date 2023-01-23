function nextRightSibling(root, target) {
  // your code here
  if (!root) {
    return null;
  }

  const queue = [root];
  let findTarget = false;
  while (queue.length) {
    const element = queue.shift();

    if (findTarget) {
      return element;
    }

    if (element === target) {
      findTarget = true;
    }

    for (let i = 0; i < element.children.length; i++) {
      queue.push(element.children[i]);
    }
  }

  return null;
}
