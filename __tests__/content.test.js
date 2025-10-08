const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../student-code/index.html"), "utf8");
const { document } = new JSDOM(html).window;

describe("Content Tests", () => {
  test("includes <title> with correct text and closing tag", () => {
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("My First Web Page");
    expect(html.includes("</title>")).toBe(true);
  });

  test("includes <h1> with correct text and closing tag", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Welcome to My Web Page");
    expect(html.includes("</h1>")).toBe(true);
  });

  test("includes <p> with description and closing tag", () => {
    const p = document.querySelector("p");
    expect(p).not.toBeNull();
    expect(p.textContent).toMatch(/simple web page created to demonstrate/i);
    expect(html.includes("</p>")).toBe(true);
  });
});
