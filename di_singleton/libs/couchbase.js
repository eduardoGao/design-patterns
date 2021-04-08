import {} from '../';
let conexionDB = null;
class Coachbase {

  constructor(name, port ) {
    this.couchbase = couchbase;
  }
  conexion() {

  }
  insert(){

  }
  update() {

  }
}
if (conexionDB === null) {
  conexionDB = new Coachbase();
}
module.exports = conexionDB;