// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postres://postgres:winter@localhost/wprun_tracker'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL 
  }
}
/// TEST