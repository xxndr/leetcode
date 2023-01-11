function getTags(tree, uniqueTags = new Set()) {
  // your code here
  const tagName = tree.tagName.toLowerCase();
  uniqueTags.add(tagName);
  [...tree.children].forEach((child) => {
    getTags(child, uniqueTags);
  });

  return [...uniqueTags];
}
