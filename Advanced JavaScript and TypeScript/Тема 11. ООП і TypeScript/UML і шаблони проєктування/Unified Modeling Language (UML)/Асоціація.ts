class DB {
  connection() {
    console.log('Db connected');
  }
}

class Server {
  constructor(private database: DB) {}

  init() {
    this.database.connection();
  }
}

const db = new DB();
const server = new Server(db);

server.init();
