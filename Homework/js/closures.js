let countInvokations = (function () {
  let counter = 0;
  return function () {
    console.log(++counter)
  }
})();
countInvokations();
countInvokations();
countInvokations();