import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Master } from "../models/Master";
import { createQueryBuilder } from "typeorm";
import { getManager } from "typeorm";

const router = Router();

router.get("/", async (req: Request, resp: Response) => {
  const manager = getManager();
  if (req.query.postal_code == undefined) {
    const rawData = await manager.query(`SELECT id,username,postal_code,city
  from master m join details d on (m.id = d.idId)`);
    resp.json(rawData);
  } else {
    const rawData = await manager.query(
      `SELECT username
  from master m join details d on (m.id = d.idId)  
  where d.postal_code =` + req.query.postal_code
    );
    resp.json(rawData);
  }
});

router.delete("/", async (req: Request, resp: Response) => {
  const manager = getManager();

  if (req.query.postal_code == undefined) {
    resp.sendStatus(400);
  } else {
    const rawData = await manager.query(
      `DELETE FROM master WHERE id  IN (SELECT idid from details where postal_code==` +
        req.query.postal_code +
        ")"
    );
    const rawData2 = manager.query(
      "DELETE FROM details   where details.postal_code=" + req.query.postal_code
    );
    console.log(rawData);
    resp.sendStatus(204);
  }
});

export default router;
