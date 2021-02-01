'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Crud1Schema extends Schema {
  up () {
    this.create('crud_1_s', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('crud_1_s')
  }
}

module.exports = Crud1Schema
