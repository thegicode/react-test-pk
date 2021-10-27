var differentValue = function differentValue(node1, node2) {
  if (node1.value !== node2.value) {
    return true;
  }

  if (node1.checked !== node2.checked) {
    return true;
  }

  return false;
};

var isNodeChanged = function isNodeChanged(node1, node2) {
  var n1Attributes = node1.attributes;
  var n2Attributes = node2.attributes;
  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }

  var differentAttribute = Array.from(n1Attributes).find(function (attribute) {
    var name = attribute.name;

    var attribute1 = node1.getAttribute(name);
    var attribute2 = node2.getAttribute(name);

    return attribute1 !== attribute2;
  });

  if (differentAttribute) {
    return true;
  }

  if (differentValue(node1, node2)) {
    return true;
  }

  if (node1.children.length === 0 && node2.children.length === 0 && node1.textContent !== node2.textContent) {
    return true;
  }

  return false;
};

var applyDiff = function applyDiff(parentNode, realNode, virtualNode) {
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  if (isNodeChanged(virtualNode, realNode)) {
    realNode.replaceWith(virtualNode);
    return;
  }

  var realChildren = Array.from(realNode.children);
  var virtualChildren = Array.from(virtualNode.children);

  var max = Math.max(realChildren.length, virtualChildren.length);
  for (var i = 0; i < max; i++) {
    applyDiff(realNode, realChildren[i], virtualChildren[i]);
  }
};

export default applyDiff;