// index.js

import HttpServer from './HttpServer.js';

/**
 * Initializes and starts the HTTP server.
 */
function initServer() {
  const server = new HttpServer('127.0.0.1', 3000);
  server.start();
}

initServer();
