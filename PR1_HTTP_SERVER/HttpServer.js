
import http from 'http';
import { URL } from 'url';

/**
 * @module HttpServer
 */

/**
 * Represents the HTTP server.
 * @class
 */
class HttpServer {
  /**
   * Creates an instance of the HttpServer.
   * @param {string} host - The hostname where the server will run.
   * @param {number} port - The port number on which the server will listen.
   */
  constructor(host = '127.0.0.1', port = 3000) {
    /**
     * The hostname where the server will run.
     * @type {string}
     */
    this.host = host;

    /**
     * The port number on which the server will listen.
     * @type {number}
     */
    this.port = port;

    /**
     * The HTTP server instance.
     * @type {http.Server}
     */
    this.server = http.createServer(this.requestHandler.bind(this));
  }

  /**
   * Handles incoming HTTP requests.
   * @param {http.IncomingMessage} req - The incoming request object.
   * @param {http.ServerResponse} res - The response object to send data back to the client.
   */
  requestHandler(req, res) {
    const parsedUrl = new URL(req.url, `http://${this.host}:${this.port}`);
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    switch (path) {
      case '/':
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome' }));
        break;
      case '/books':
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'List of books' }));
        break;
      default:
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
        break;
    }
  }

  /**
   * Starts the server and listens on the specified hostname and port.
   * Logs the server URL upon successful startup.
   */
  start() {
    this.server.listen(this.port, this.host, () => {
      console.log(`Server is running at http://${this.host}:${this.port}`);
    });
  }
}

export default HttpServer;
