// returns the type of any javascript 'item' as a string

function getTypeOf(item) {
  if (Number.isNaN(item)) {
    return item.toString();
  }
  if (item === undefined) return "Undefined";
  if (item === null) return "Null";
  var typeString = Object.prototype.toString.call(item);
  return typeString.slice(typeString.indexOf(" ") + 1, -1);
}

export { getTypeOf };
