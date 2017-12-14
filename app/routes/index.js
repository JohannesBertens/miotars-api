const charRoutes = require('./char_routes');
module.exports = function(app, db) {
    charRoutes(app, db);
  // Other route groups could go here, in the future
};