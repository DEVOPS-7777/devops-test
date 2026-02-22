const express = require("express");
const Redis = require("ioredis");

const app = express();

const redis = new Redis(process.env.REDIS_URL || "redis://redis:6379");
const SECRET = process.env.APP_SECRET;

app.get("/health", async (req, res) => {
  try {
    await redis.ping();
    if (!SECRET) throw new Error("missing secret");
    res.json({ status: "ok" });
  } catch (e) {
    res.status(500).json({ status: "error", error: e.message });
  }
});

app.get("/", async (req, res) => {
  const count = await redis.incr("counter");
  res.json({ count });
});

app.listen(3000, () => console.log("server started"));