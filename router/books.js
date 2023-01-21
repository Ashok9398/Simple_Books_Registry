const express = require('express');
const router = express.Router();

const {
	getBooks,
	getBook,
	postBook,
	putBook,
	deleteBook
}=require("../controllers/book");

router.route('/').get(getBooks).post(postBook);
router.route("/:id").get(getBook).put(putBook).delete(deleteBook);

module.exports = router;
