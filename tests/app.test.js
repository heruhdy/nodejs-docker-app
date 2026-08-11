const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("../app");

test("GET / returns successful response", async (t) => {
  const server = app.listen(0);

  await new Promise((resolve) => {
    server.once("listening", resolve);
  });

  t.after(() => {
    server.close();
  });

  const { port } = server.address();

  const response = await fetch(`http://127.0.0.1:${port}/`);

  assert.equal(response.status, 200);

  const body = await response.json();

  assert.deepEqual(body, {
    message: "Hello from Node.js Docker!",
    status: "success",
  });
});
