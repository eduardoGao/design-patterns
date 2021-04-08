import { conexionDB } from '../libs/couchbase.js'; 
import { BookService } from '../services/book.service';

const bookService = new BookService(conexionDB);


app.route('/book')
.get(async function(req, res) {
  const rta = await bookService.addTasks(res.body);
  res.send(rta);
})
.post(function (req, res) {
  res.send('Add a book')
})
.put(function (req, res) {
  res.send('Update the book')
})