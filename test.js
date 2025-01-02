import Stack from "./stack.js";

const groups = new Stack();

const test = (desc, fn) => {
  if (typeof desc === "string") {
    groups.peek().hooks.tests.push(fn);
    return;
  }

  groups.peek().hooks.tests.push(desc);
};

test.beforeEach = (fn) => {
  groups.peek().hooks.beforeEach.push(fn);
};

test.beforeAll = (fn) => {
  groups.peek().hooks.beforeAll.push(fn);
};

test.group = (fn) => {
  groups.push({
    hooks: {
      beforeEach: [],
      beforeAll: [],
      tests: [],
    },
    run: fn,
  });
};

test.run = () => {
  while (!groups.isEmpty()) {
    const group = groups.peek();

    group.run();

    group.hooks.beforeAll.forEach((befAll) => befAll());

    group.hooks.tests.forEach((test) => {
      group.hooks.beforeEach.forEach((befEach) => befEach());

      test();
    });

    groups.pop();
  }
};

export { test };
