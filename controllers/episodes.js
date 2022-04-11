import Episode from "../models/episodes.js";

export const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findById(id);

    if (episode) {
      return res.json(episode);
    }

    res.status(400).json({ message: "episode not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createEpisode = async (req, res) => {
  try {
    const episode = new Episode(req.body);
    await episode.save();
    res.status(201).json(episode);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEpisode = async (req, res) => {
  const { id } = req.params;
  const episode = await Episode.findByIdAndUpdate(id, req.body);
  res.status(200).json(episode);
};

export const deleteEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Episode.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("episode deleted!");
    }

    throw new Error("episode not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
