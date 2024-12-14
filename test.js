const hooks = {
  beforeEach: [],
};

const test = (testFn) => {
  hooks.beforeEach.forEach((fn) => fn.call());
  testFn();
};

test.beforeEach = (beforeEachFn) => {
  hooks.beforeEach.push(beforeEachFn);
};

export { test };
