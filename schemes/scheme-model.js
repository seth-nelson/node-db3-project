const db = require('../data/db-config.js');

// find()
function find() {
    return db('schemes');
};

// findById()
function findById(id) {
    return db('schemes').where({ id }).first();
};

// findSteps(id)
function findSteps(id) {
    return db('steps as s')
        .join('schemes', 'schemes.id', 'schemes.scheme_id')
        .select('s.id', 'sc.scheme_name', 's.instructions')
        .where({ scheme_id: id });
};

// add(scheme)
function add(scheme) {
    return db('schemes').insert(scheme);
};

// update(changes, id)
function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
};

// remove(id)
function remove(id) {
    return db('schemes').where({ id }).del();
};


module.exports = {
    find, findById, findSteps, add, update, remove
};