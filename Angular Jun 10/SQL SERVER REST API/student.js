var express = require('express');
var router = express.Router();

var sql = require("mssql");

// config for your database
	var config = {
        user: 'sa',
        password: 'Infor@123',
        server: 'localhost', 
        database: 'examples' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    	if (err) 
    		console.log(err);
    });

	router.get('/getAllStudents', function (req, resp) {
    
        // create Request object
        var sqlRequest = new sql.Request();
           
        // query to the database and get the records
        sqlRequest.query('select * from students', function (err, results) {
            
            if (err) console.log(err)

            // send records as a response
            resp.send(results.recordset);
            
        });
    });


	router.get('/getStudentById/:id', function (req, resp) {
    
        // create Request object
        var sqlRequest = new sql.Request();

        sqlRequest.input('id', sql.VarChar, req.params.id);   
        
        // query to the database and get the records
        sqlRequest.query('select * from students where id = @id', function (err, results) {
            
            if (err) console.log(err)

            // send records as a response
            resp.send(results.recordset);
            
        });
    });

    router.post('/insertStudent', function (req, res) {
    
        // create Request object
        var sqlRequest = new sql.Request();
           
        sqlRequest.input('id', sql.VarChar, req.body.id);
        sqlRequest.input('name', sql.VarChar, req.body.name);
        sqlRequest.input('email', sql.VarChar, req.body.email);
        
		sqlRequest.query('insert into students values (@id,@name,@email)', (err, result) => {
		    console.log(result)
        })
        
    });

    router.post('/updateStudent/:id', function (req, res) {
    
        // create Request object
        var sqlRequest = new sql.Request();
           
        sqlRequest.input('id', sql.VarChar, req.params.id);
        sqlRequest.input('name', sql.VarChar, req.body.name);
        sqlRequest.input('email', sql.VarChar, req.body.email);
        
		sqlRequest.query('update students set name=@name,email=@email  where id = @id', (err, result) => {
		    console.log(result)
        })
        
    });

    router.post('/deleteStudent/:id', function (req, res) {
    
        // create Request object
        var sqlRequest = new sql.Request();
           
        sqlRequest.input('id', sql.VarChar, req.params.id);
        
		sqlRequest.query('delete from students where id = @id', (err, result) => {
		    console.log(result)
        })
        
    });

module.exports = router;