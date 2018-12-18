exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {oid: 1, title: 'API do Bullet', description: "API feita com hapi, knex e outras tecnologias", type: 1, date: "2018-12-18", done: false},
        {oid: 2, title: 'Bullet Web', description: "App web feito com React", type: 2, date: "2018-12-18", done: false},
        {oid: 3, title: 'Bullet App', description: "App mobile feito com React Native", type: 3, date: "2018-12-18", done: false}
      ]);
    });
};
