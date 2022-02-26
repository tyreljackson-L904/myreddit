import { Post } from "./entities/Post";
import { _prod_ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  migrations: {
    path: "./migrations",
    pathTs: undefined,
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: !_prod_,
} as Parameters<typeof MikroORM.init>[0];
