exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(table) {
    table.increments("oid");
    table.string("title", 25).notNullable();
    table.text("description").notNullable();
    table.integer("type").notNullable();
    table.date("date").notNullable();
    table.boolean("done");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
