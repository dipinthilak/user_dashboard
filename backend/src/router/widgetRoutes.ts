import express, { Request, Response } from "express";
import { WidgetService } from "../services/widgetService";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const email = req.body.email as string;
    const state = req.body.state as any[];

    console.log(email,state,"email and state");
    
    await WidgetService.updateWidgetState(email, state);
    res.json({ message: "Widget state updated" });
  } 
  catch (err: unknown) {
    console.error("Error updating widget state:", err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const email = req.query.email as string;
    const state = await WidgetService.getWidgetState(email);
    res.json(state);
  } catch (err: unknown) {
    console.error("Error fetching widget state:", err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
});

export default router;
