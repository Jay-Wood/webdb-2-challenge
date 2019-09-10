const knex = require("knex");
const knexFile = requires("../knexfile.js");
const knexConfig = knexFile.development;

module.exports = knex(knexConfig);