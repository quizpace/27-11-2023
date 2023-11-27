function concat(st1, st2) {
  if ([st1, st2].includes(undefined))
    throw new Error("one of the strings in undefined");
  return st1 + st2;
}

module.exports = {
  concat,
};
