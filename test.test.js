import assert from "node:assert";

import { test } from "./test.js";

test(() => {
  test(() => {
    assert(1 === 1);
  });
});

test(() => {
  assert.throws(() =>
    test(() => {
      assert(1 !== 1);
    })
  );
});

test(() => {
  let counter = 0;

  test.beforeEach(() => {
    counter++;
  });

  test(() => assert.equal(counter, 1));

  test(() => assert.equal(counter, 2));
});
