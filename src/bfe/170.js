function generateSelector(root, target, path = "") {
  if (!root) {
    return null;
  }

  if (!path.length) {
    path += root.tagName;
  } else if (root.id) {
    path += ` #${root.id} `;
  } else {
    path += ` > ${root.tagName}`;
  }

  if (target === root) {
    return path;
  }

  let potentialPath = null;

  for (let child of root.children) {
    potentialPath = generateSelector(child, target, path);
    if (potentialPath) {
      return potentialPath;
    }
  }
}

const generateSelector2 = (root, target) => {
  const dfs = (root, path) => {
    if (root === target) {
      return path.join(" > ");
    }

    if (root.id) {
      path.push(`#${root.id}`);
    } else {
      path.push(root.tagName);
    }

    for (let child of root.children) {
      const result = dfs(child, path);
      if (result) {
        return result;
      }
      path.pop();
    }
  };

  return dfs(root, []);
};
