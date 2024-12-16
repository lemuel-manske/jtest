import assert from "node:assert";

import { test } from "./test.js";

test.describe(() => {
  test.run(() => {
    assert.equal(1, 1);
  });
});

test.describe(() => {
  assert.throws(() =>
    test.run(() => {
      assert.notEqual(1, 1);
    })
  );
});

test.describe(() => {
  let counter = 0;

  test.beforeEach(() => {
    counter++;
  });

  test.run(() => assert.equal(counter, 1));

  test.run(() => assert.equal(counter, 2));
});

test.describe(() => {
  let counter = 0;

  test.beforeEach(() => {
    counter++;
  });

  test.run(() => assert.equal(counter, 1));

  test.run(() => assert.equal(counter, 2));
});

test.describe("should pass", () => {
  test.run(() => assert.equal(1, 1));
});

test.describe(() => {
  let counter = 0;

  test.beforeAll(() => {
    counter++;
  });

  test.run(() => assert.equal(counter, 1));

  test.run(() => assert.equal(counter, 1));

  test.run(() => assert.equal(counter, 1));
});
