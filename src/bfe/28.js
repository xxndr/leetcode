const oldSetTimeout = window.setTimeout;

let ids = [];
window.setTimeout = function (handler, timeout, arguments) {
  const id = oldSetTimeout(handler, timeout, arguments);
  ids.push(id);
  return id;
};

function clearAllTimeout() {
  ids.forEach((id) => clearTimeout(id));
  ids = [];
}
