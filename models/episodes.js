import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Episode = new Schema({
  yearOfProd: { type: Number },
  season: { type: Number },
  episodeTitle: { type: String },
  duration: { type: Number },
  summary: { type: String },
  director: { type: String },
  stars: { type: Number },
});

export default mongoose.model("episodes", Episode);
