"use strict";
require("dotenv").config();
var gitLabel = require("../dist/index.js");

var config = {
  api: "https://api.github.com",
  repo: process.env.REPO,
  token: process.env.TOKEN,
};

var labels = [
  {
    name: "size/XXL",
    color: "#ee0000",
    description:
      "Denotes a PR that changes 1000+ lines, ignoring generated files.",
  },
  {
    name: "size/XL",
    color: "#d73a49",
    description:
      "Denotes a PR that changes 500-999 lines, ignoring generated files.",
  },
  {
    name: "size/L",
    color: "#ee9900",
    description:
      "Denotes a PR that changes 100-499 lines, ignoring generated files.",
  },
  {
    name: "size/M",
    color: "#eebb00",
    description:
      "Denotes a PR that changes 30-99 lines, ignoring generated files.",
  },
  {
    name: "size/S",
    color: "#77bb00",
    description:
      "Denotes a PR that changes 10-29 lines, ignoring generated files.",
  },
  {
    name: "size/XS",
    color: "#009900",
    description:
      "Denotes a PR that changes 0-9 lines, ignoring generated files.",
  },
  {
    name: "size/XS",
    color: "#009900",
    description:
      "Denotes a PR that changes 0-9 lines, ignoring generated files.",
  },
  {
    name: "fix",
    color: "#8cd842",
    description: "A bug fix",
  },
  {
    name: "refactor",
    color: "#18c96a",
    description: "A code change that neither fixes a bug nor adds a feature",
  },
  {
    name: "do not merge",
    color: "#e21b4d",
    description: "",
  },
  {
    name: "merge conflicts",
    color: "#000000",
    description: "Branch has merge conflicts to be resolved",
  },
  {
    name: "ci",
    color: "#3c1793",
    description: "Changes to our CI configuration files and scripts",
  },
  {
    name: "feature",
    color: "#f2d58c",
    description: "New feature",
  },
  {
    name: "work in progress",
    color: "#b7f954",
    description: "work in progress",
  },
];

// remove specified labels from a repo
gitLabel
  .remove(config, labels)
  .then(console.log) //=> success message
  .catch(console.log); //=> error message

// add specified labels to a repo
gitLabel
  .add(config, labels)
  .then(console.log) //=> success message
  .catch(console.log); //=> error message
