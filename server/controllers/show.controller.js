const Show = require("../models/show.model.js");

module.exports = {
  //*=========== CREATE ===========*//
  createShow: (req, res) => {
    Show.create(req.body)
      .then((newShow) => res.json(newShow))
      .catch((err) => res.status(400).json(err));
  },

  //*=========== READ - ALL ===========*//
  getAllShows: (req, res) => {
    Show.find()
      .then((allShows) => res.json(allShows))
      .catch((err) => res.status(400).json(err));
  },

  //*=========== READ - ONE - byID ===========*//
  getOneShowID: (req, res) => {
    Show.findById(req.params.id)
      .then((oneShow) => res.json(oneShow))
      .catch((err) => res.json(err));
  },

  //*=========== UPDATE - ONE byID ===========*//
  updateShow: (req, res) => {
    Show.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedShow) => res.json(updatedShow))
      .catch((err) => res.json(err));
  },

  //*=========== DELETE - ONE - byID ===========*//
  deleteShow: (req, res) => {
    Show.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
