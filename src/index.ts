import { MikroORM, UuidType } from "@mikro-orm/core";
// import type { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import { isNumber } from "util";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, {
    id: ,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "my first post",
  });
  await orm.em.persistAndFlush(post);
};

main();
