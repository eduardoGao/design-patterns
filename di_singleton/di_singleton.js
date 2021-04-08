// DI / Singleton

// dependency
import { format } from 'date-fns';

const formatDate = (date, format, formatFns) => {
  return formatFns(date, format);
}

formatDate(new Date(), 'yyyy-MM-dd', format);

// POO





class UserService {

  constructor(couchbase) {
    this.couchbase = couchbase;
  }

  addUser() {
    this.couchbase.insert();
  }

  removeUser(){
    this.couchbase.update();
  }
}

const conexionDB = new Coachbase('db', 200,as);
const userService = new UserService(conexionDB);
const tasksService = new TaskService(conexionDB);

// controllers / routers
//
