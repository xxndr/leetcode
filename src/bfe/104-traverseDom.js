function flatten(root) {
  // your code here
  const res = [];
  const queue = [];
  if (!root) {
    return res;
  }

  queue.push(root);

  while (queue.length) {
    const el = queue.shift();
    res.push(el);
    for (let i = 0; i < el.children?.length; i++) {
      queue.push(el.children[i]);
    }
  }

  return res;
}
