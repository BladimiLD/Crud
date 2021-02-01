'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CruddySchema extends Schema {
  up () {
    this.create('cruddies', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cruddies')
  }
}

module.exports = CruddySchema
