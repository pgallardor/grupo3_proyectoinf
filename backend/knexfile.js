module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'bdd.inf.udec.cl',
            user: 'jonasaavedra',
            password: 'pi2018-2',
            database: 'jonasaavedra' //??
        }
    },
    production: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'dbpass123',
            database: 'wayki_test'
        }
    }
}