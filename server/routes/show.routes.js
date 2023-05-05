const ShowController = require("../controllers/show.controller");

module.exports = (app) => {
  app.get("/api/shows", ShowController.getAllShows);
  app.post("/api/shows", ShowController.createShow);
  app.get("/api/shows/:id", ShowController.getOneShowID);
  app.patch("/api/shows/:id", ShowController.updateShow);
  app.delete("/api/shows/:id", ShowController.deleteShow);
};
