import express from "express";
import { AuthService } from "../services/authService"

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    console.log("router singup executed",req.body);

    
    const response = await AuthService.signUp(req.body.email, req.body.password);

      res.status(201).json(response);
    }
   catch (err: unknown) {
    if(err instanceof Error)
    res.status(400).json({ error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    console.log("router executed",req.body);
    
    
    const response = await AuthService.signIn(req.body.email, req.body.password);
    console.log("response signin service" ,response);
    
    res.json(response);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
