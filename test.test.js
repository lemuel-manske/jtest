import assert from "node:assert";

import { test } from "./test.js";

test.group(() => {
  test("should pass", () => {
    assert.equal(1, 1);
  });

  test("should pass", () => {
    assert.throws(() => assert.equal(1, 2));
  });
});
