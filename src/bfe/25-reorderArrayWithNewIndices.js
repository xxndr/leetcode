function sort(items, newOrder) {
  for (let i = 0; i <= items.length - 1; i++) {
    while (newOrder[i] !== i) {
      let index = newOrder[i];
      [items[i], items[index]] = [items[index], items[i]];
      [newOrder[i], newOrder[index]] = [newOrder[index], newOrder[i]];
    }
  }
}
