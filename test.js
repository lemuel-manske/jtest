const hooks = {
  beforeEach: [],
};

const test = (desc, fn) => {
  hooks.beforeEach.forEach((fn) => fn.call());

  if (typeof desc === "string") {
    return fn();
  }

  desc();
};

test.beforeEach = (fn) => {
  hooks.beforeEach.push(fn);
};

test.beforeAll = (fn) => {
  fn();
};

test.describe = (desc, fn) => {
  if (typeof desc === "function") {
    return desc();
  }

  fn();
};

const Test = {
  beforeEach: test.beforeEach,
  beforeAll: test.beforeAll,
  describe: test.describe,
  run: test,
};

export { Test as test };
