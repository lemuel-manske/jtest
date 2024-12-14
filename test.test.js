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
