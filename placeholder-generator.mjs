import { readFile } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

try {
  const file = await readFile("./public/unsplash.webp");

  const { base64 } = await getPlaiceholder(file);

  console.log(base64);
} catch (err) {
  err;
}
