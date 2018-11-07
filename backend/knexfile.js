module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'bdd.inf.udec.cl',
            user: 'jonasaavedra',
            password: 'pi2018-2',
            database: 'jonasaavedra' //??
        },
        searchPath: ['casino_udec_prueba']
    },
    production: {
        client: 'pg',
        connection: {
            host: 'bdd.inf.udec.cl',
            user: 'jonasaavedra',
            password: 'pi2018-2',
            database: 'jonasaavedra'
        },
      searchPath: ['casino_udec_prueba', 'casino_udec']
    }
}
