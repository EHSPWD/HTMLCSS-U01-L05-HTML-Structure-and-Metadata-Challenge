const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../student-code/index.html"), "utf8");
const dom = new JSDOM(html);

test("includes DOCTYPE declaration", () => {
  const doctype = dom.window.document.doctype;
  expect(doctype).not.toBeNull();
  expect(doctype.name).toBe("html");
});
