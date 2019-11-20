
function makeAdder(num) {
  return function addFunction(x) {
    return num + x
  }
}