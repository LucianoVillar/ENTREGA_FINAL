'use strict'

const express = require('express')

const app = express();
const path = require('path')
const port = process.env.PORT || 3000
const routes = require("./routes/index");

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//webpack

const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const config = require('./webpack.config');
const { request } = require('http');

const app = express()

//middlewares

app.use(webpackDev(webpack(config)))

// routes
app.use(routes);

//static files

app.use(express.static(path.join(__dirname, 'public')))

// starting server

app.listen(3000, () => {
    console.log('server listing on port ${3000}')
})

// Conexion de base de datos con el backend

const { Client } = require('pg')
const client = new Client()
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()


const { Client } = require('pg');
const router = require('./routes/index');
const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})

require('dotenv').config();

router.get('/', async (request, response) => {
    const config = {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT
    };

    const client = new Client(config);
});

const text = 'INSERT INTO usuarios VALUES  (default, $1, $2, $3) RETURNING *'
const VALUES = ['luvillar2000@gmail.com', 'luchein', 'villar00']

//callback

client.query(text, values, (err, res) => {
    if(err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})

//promise
client
    .query(text, values)
    .then(res => {
        console.log(res.rows[0])
    })
    .catch(e => console.error(e.stack))

    // async/await
    try {
        const res = await client.query(text, values)
    |   console.log(res.rows[0])
} catch (err) {
    console.log(err.stack)
}

router.post('/', verifyToken, async (request, response) => {
    const nuevaTarea = {
        description: request.body.titulo,
        priority: request.body.prioridad,
        author_id: 1
    }

    const config = {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        password: process.env.PGPASSEORD,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT
    };

    const client = new Client(config);

    await client.connect();
    const res = await client.query(
        'INSERT INTO usuarios VALUES  (default, $1, $2, $3)',
        [request.body.titulo, request.body.prioridad, 1]
    );
    console.log(res);
    await client.end();

    response.send({
        tareaNueva: nuevaTarea
    })
});

const { Pool } = require('pg');

const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSEORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
};

const pool = new Pool(config);

module.exports = {
    query: (text, params) => pool.query(text, params),
}