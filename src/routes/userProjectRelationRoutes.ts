import { Hono } from "hono";
import { userProjectRelation } from "../controllers/userProjectRelations.Controller";



const userProjectRelationRoutes=new Hono();

userProjectRelationRoutes.get('/user-project-relation',userProjectRelation);

export default userProjectRelationRoutes;