
// @deno-types="./vendor/van-1.1.3.min.d.ts"
import van from "./vendor/van-1.1.3.min.js";

const {button, div, pre} = van.tags;

const sleep = (/** @type {number | undefined} */ ms) => new Promise(resolve => setTimeout(resolve, ms))

function Run(/** @type {{sleepMs: number | undefined}} */ { sleepMs }) {
  const headingSpaces = van.state(40), trailingUnderscores = van.state(0);

  const animate = async () => {
    while(headingSpaces.val > 0) {
      await sleep(sleepMs);
      --headingSpaces.val, ++trailingUnderscores.val;
    }
  };
  animate();

  return pre(() => `${" ".repeat(headingSpaces.val)}🚐💨Hello VanJS!${"_".repeat(trailingUnderscores.val)}`);
}

const Hello = () => {
  const dom = div()
  return div(
    dom,
    button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
    button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
    button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
    button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
    button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
  )
}

van.add(document.body, Hello())

