const hooks = {
  beforeEach: [],
};

const test = (testFnOrDesc, testOrUndef) => {
  hooks.beforeEach.forEach((fn) => fn.call());

  if (typeof testFnOrDesc === "string") {
    return testOrUndef();
  }

  testFnOrDesc();
};

test.beforeEach = (beforeEachFn) => {
  hooks.beforeEach.push(beforeEachFn);
};

export { test };
