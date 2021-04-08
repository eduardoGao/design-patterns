class BooksService {

  constructor(couchbase) {
    this.couchbase = couchbase;
  }

  addTasks() {
    this.couchbase.insert();
  }

  removeTask(){
    this.couchbase.update();
  }
}

module.exports = BooksService;