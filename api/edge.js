import app from "../dist/server/index.js";

export const config = {
  runtime: "edge",
};

export default async function handler(request, context) {
  return app.fetch(request, context);
}
