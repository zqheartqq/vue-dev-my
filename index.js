function simpleNormalizeChildren (children) {
  for (let i = 0; i < children.length; i++) {
    // 把嵌套数组拍平成一维数组
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

console.log(simpleNormalizeChildren([1, [2, 3]]))