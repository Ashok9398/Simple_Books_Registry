const bookdb = require('../models/Book');

books1 =[];
const getBooks = async(req,res)=>{
	const books = await bookdb.find({});
	res.json(books);
}
const getBook = async(req,res)=>{
	const  {id:bookId} = req.params;
	const book = await bookdb.findOne({id : bookId});
	res.json(book);

}
const postBook = async(req,res) =>{
	const book = await bookdb.create(req.body);
	
	res.json(book);

}
const putBook = async(req,res)=>{
	const {id } = req.params;
	await bookdb.findOneAndUpdate(id,req.body,{
		new : true
	});
	const books = await bookdb.find({});
	res.json(books);
}

const deleteBook= async(req,res)=>{
	const {id}= req.params;
	const book = await bookdb.findOneAndDelete({id});
	res.json("Book has been deleted");
	

}

module.exports={
	getBooks,
	getBook,
	postBook,
	putBook,
	deleteBook,
}