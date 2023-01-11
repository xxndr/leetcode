const findCorrespondingNodeRecursive = (rootA, rootB, target) => {
  // your code here
  if (!rootA) {
    return null;
  }

  if (rootA === target) {
    return rootB;
  }

  const arrOfAChildrenNodes = [...rootA.children];

  for (let i = 0; i < arrOfAChildrenNodes.length; i++) {
    const correspondingANode = arrOfAChildrenNodes[i];
    const correspondingBNode = rootB.children[i];
    const node = findCorrespondingNodeRecursive(
      correspondingANode,
      correspondingBNode,
      target
    );
    if (node) {
      return node;
    }
  }
};

const findCorrespondingNodeIterative = (rootA, rootB, target) => {
  const queueA = [];
  const queueB = [];

  queueA.push(rootA);
  queueB.push(rootB);

  while (queue.length) {
    const elA = queueA.pop();
    const elB = queueB.pop();

    if (elA === target) {
      return elB;
    }

    [...elA.children].forEach((el, i) => {
      queueA.push(el);
      queueB.push(elB.children[i]);
    });
  }
};
