const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../student-code/index.html"), "utf8");
const { document } = new JSDOM(html).window;

describe("HTML Structure", () => {
  test("includes <html>, <head>, and <body> tags", () => {
    expect(document.documentElement.tagName.toLowerCase()).toBe("html");
    expect(document.querySelector("head")).not.toBeNull();
    expect(document.querySelector("body")).not.toBeNull();
  });

  test("has closing </html>, </head>, and </body> tags", () => {
    expect(html.includes("</html>")).toBe(true);
    expect(html.includes("</head>")).toBe(true);
    expect(html.includes("</body>")).toBe(true);
  });
});
