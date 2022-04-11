import db from "../db/connection.js";
import Episode from "../models/episodes.js";
import episodes from "./episodes.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert episodes into database
  await Episode.insertMany(episodes);

  // close db connection (done)
  db.close();
};

insertData();
