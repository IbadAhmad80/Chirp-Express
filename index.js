const http = require('http');
const express = require('express');
const { app } = require('./app');
const server = http.createServer(app);
const cors = require('cors');

const port = process.env.APP_BUILD_PORT;

const authRoutes = require('./routes/auth.routes')

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(authRoutes);

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/api/v1`);
});
