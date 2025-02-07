import express from "express";
import { WidgetService } from "../services/widgetService";
import { authenticateToken } from "../middlewares/_authMiddleware";

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  try {
    const state = await WidgetService.getWidgetState(res.locals.email);
    res.json(state);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
});

router.put("/", authenticateToken, async (req, res) => {
  try {
    const response = await WidgetService.updateWidgetState(
      res.locals.email,
      req.body.state
    );
    res.json(response);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
});

export default router;
