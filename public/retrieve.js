var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/loginapp');
var conn = mongoose.connection;

var fs = require('fs');
var path = require('path');

var Grid = require('gridfs-stream');

Grid.mongo = mongoose.mongo;

conn.once('open',function() {
	console.log('-connection open-');
	var gfs = Grid(conn.db);

	var fs_write_stream = fs.createWriteStream(path.join(__dirname,'../public/itrix.jpg'));
    
    var readstream = gfs.createReadStream({
    	"filename": "itrix.jpg"
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close',function () {
	    console.log('Written successfully 1');
}); 

var fs_write_stream = fs.createWriteStream(path.join(__dirname,'../public/infinity.jpg'));
    
    var readstream = gfs.createReadStream({
    	"filename": "infinity.jpg"
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close',function () {
	    console.log('Written successfully 2');
}); 

var fs_write_stream = fs.createWriteStream(path.join(__dirname,'../public/war.jpg'));
    
    var readstream = gfs.createReadStream({
    	"filename": "war.jpg"
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close',function () {
	    console.log('Written successfully 3');
}); 
var fs_write_stream = fs.createWriteStream(path.join(__dirname,'../public/itrix1.jpg'));
    
    var readstream = gfs.createReadStream({
    	"filename": "itrix1.jpg"
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close',function () {
	    console.log('Written successfully 4');
}); 
var fs_write_stream = fs.createWriteStream(path.join(__dirname,'../public/image.jpg'));
    
    var readstream = gfs.createReadStream({
    	"filename": "image.jpg"
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close',function () {
	    console.log('Written successfully 5');
}); 

});




