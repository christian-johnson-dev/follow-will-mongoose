const mongoose = require("mongoose");

const stringFieldValidation = (fieldName) => ({
  type: String,
  required: [true, `${fieldName} is required`],
  minlength: [2, `${fieldName} must be at least 2 characters`],
  maxlength: [100, `${fieldName} cannot be more than 100 characters`],
});

const ShowSchema = new mongoose.Schema(
  {
    name: stringFieldValidation("Name"),
    genre: stringFieldValidation("Genre"),
    network: stringFieldValidation("Network"),
    releaseYear: {
      type: Number,
      required: [true, "Year is required"],
      min: [1900, "Must be later than 1900"],
    },
  },
  { timestamps: true }
);

const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;
