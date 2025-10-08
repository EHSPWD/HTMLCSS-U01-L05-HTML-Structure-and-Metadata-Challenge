const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Unit 01 - Lesson 05: HTML Structure and Metadata Challenge", () => {
  // -------- Test 1: glitch.html (Fix the Glitch) --------
  describe("glitch.html", () => {
    const htmlPath = path.resolve(__dirname, "../student-code/glitch.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    const { document } = new JSDOM(html).window;

    test("includes <!DOCTYPE html>", () => {
      const firstLine = html.trim().split("\n")[0].toLowerCase();
      expect(firstLine.includes("<!doctype html>")).toBe(true);
    });

    test("includes <html>, <head>, and <body> tags", () => {
      expect(document.querySelector("html")).not.toBeNull();
      expect(document.querySelector("head")).not.toBeNull();
      expect(document.querySelector("body")).not.toBeNull();
    });

    test("has closing </html>, </head>, and </body> tags", () => {
      expect(html.includes("</html>")).toBe(true);
      expect(html.includes("</head>")).toBe(true);
      expect(html.includes("</body>")).toBe(true);
    });

    test("contains a <meta charset='UTF-8'> tag", () => {
      const meta = document.querySelector("meta[charset='UTF-8']");
      expect(meta).not.toBeNull();
    });

    test("contains a <title> tag inside <head>", () => {
      const title = document.querySelector("head title");
      expect(title).not.toBeNull();
      expect(title.textContent.trim().length).toBeGreaterThan(0);
    });

    test("contains a linked stylesheet", () => {
      const link = document.querySelector("link[rel='stylesheet']");
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toMatch(/.css$/);
    });

    test("has visible text content in the <body>", () => {
      const bodyText = document.querySelector("body").textContent.trim();
      expect(bodyText.length).toBeGreaterThan(0);
    });
  });

  // -------- Test 2: aboutme.html (Mini Webpage) --------
  describe("aboutme.html", () => {
    const htmlPath = path.resolve(__dirname, "../student-code/aboutme.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    const { document } = new JSDOM(html).window;

    test("includes <!DOCTYPE html>", () => {
      const firstLine = html.trim().split("\n")[0].toLowerCase();
      expect(firstLine.includes("<!doctype html>")).toBe(true);
    });

    test("includes <html>, <head>, and <body> tags", () => {
      expect(document.querySelector("html")).not.toBeNull();
      expect(document.querySelector("head")).not.toBeNull();
      expect(document.querySelector("body")).not.toBeNull();
    });

    test("contains <meta> tags for SEO (Google, Bing, Yahoo)", () => {
      const metaTags = document.querySelectorAll("meta[name]");
      expect(metaTags.length).toBeGreaterThanOrEqual(3);
    });

    test("includes a <title> in the <head>", () => {
      const title = document.querySelector("head title");
      expect(title).not.toBeNull();
      expect(title.textContent.trim().length).toBeGreaterThan(0);
    });

    test("links a stylesheet (style.css)", () => {
      const link = document.querySelector("link[rel='stylesheet']");
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toMatch(/style\.css$/);
    });

    test("contains main heading <h1> with text 'About Me'", () => {
      const h1 = document.querySelector("h1");
      expect(h1).not.toBeNull();
      expect(h1.textContent.toLowerCase()).toContain("about me");
    });

    test("contains at least two paragraphs (<p>) describing the student or hobbies", () => {
      const paragraphs = document.querySelectorAll("p");
      expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    });

    test("contains a subheading <h2> for hobbies", () => {
      const h2 = document.querySelector("h2");
      expect(h2).not.toBeNull();
      expect(h2.textContent.toLowerCase()).toContain("hobbies");
    });
  });
});
