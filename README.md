# Friends TV Show API

API for geting data about the tv show Friends.

## About

Every episode represents:

Year of production based on IMDB
Season of the Friends show
The title of the episode, starting with 'The one with ...'
Duration of episode by minutes
Summary of the episode in a few lines
Director of that specific episode
IMDB rating of that episode

## Endpoints

router.get("/episodes", controllers.getEpisodes);
router.get("/episodes/:id", controllers.getEpisode);
router.post("/episodes", controllers.createEpisode);
router.put("/episodes/:id", controllers.updateEpisode);
router.delete("/episodes/:id", controllers.deleteEpisode);

| Method | Endpoint      | Description               |
| :----- | :------------ | :------------------------ |
| POST   | /episodes     | Creates episodes.         |
| GET    | /episodes     | Reads all eposisodes.     |
| GET    | /episode/:id  | Reads a specific episode. |
| PUT    | /episodes/:id | Updates an episode.       |
| DELETE | /episodes/:id | Deletes an episode.       |

##### JSON Schema

| Name              | Type   |
| :---------------- | :----- |
| **yearOfProd:**   | Number |
| **season:**       | Number |
| **episodeTitle:** | String |
| **duration:**     | Number |
| **summary:**      | String |
| **director:**     | String |
| **stars:**        | Number |

### Technology Used

JavaScript,Express,Mongoose
