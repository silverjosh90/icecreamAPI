
exports.up = function(knex, Promise) {
  return knex.schema.createTable('icecreams', function(table){
    table.increments();
    table.string('flavor');
    table.string('description');
    table.string('imageUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('icecreams');
};
