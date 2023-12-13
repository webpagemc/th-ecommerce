import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get("/", (req, res)=>{

    res.status(200).render("home");

})

viewsRouter.get("/addProduct", (req, res)=>{

    res.status(200).render("form");

})

export default viewsRouter;