#!/usr/bin/env node
const express = require('express')
const config = require('./dist/js/config.js')
const mysql = require('mysql')
const session = require('express-session')
const SESS_NAME = 'ssh! this is a secret string'

// create an express(aka web server), and start the server
const app = express()
const port = 8215
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/dist`))
app.set('view engine', 'hbs')

//Define Routes
// const temp = app.use('/', require('./routes/pages'))

// setup `body-parser`
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//route
app.get("/dbms", (req, res) => {
  res.render('dbms')
})

//connect to mysql
const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log('fail to connect:', err)
    process.exit()
  }

})

app.get('/upload_sql', (req, res) => {  
  
  connection.query(req.query.sql_data, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/delete_table', (req, res) => {  
  
  connection.query(`DELETE FROM ${req.query.delete_table} WHERE ${req.query.delete_condition}`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/insert_table', (req, res) => {  
  
  connection.query(`INSERT INTO ${req.query.insert_table} VALUES ${req.query.insert_text}`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/find_table', (req, res) => {  
  
  connection.query(`SELECT * FROM ${req.query.find_table} WHERE ${req.query.find_text}`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/change_table', (req, res) => {  
  
  connection.query(`UPDATE  ${req.query.change_table} SET ${req.query.change_text} WHERE ${req.query.change_column}`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/query_table', (req, res) => {  
  
  connection.query(`SELECT  ${req.query.query_text} FROM ${req.query.query_table} WHERE ${req.query.query_column}`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/find_in', (req, res) => {  
  
  connection.query(`SELECT  ${req.query.in_column1} FROM ${req.query.in_table1} WHERE ${req.query.in_condition1} ${req.query.in_not} ( SELECT ${req.query.in_column2} FROM ${req.query.in_table2} WHERE ${req.query.in_condition2} )`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/find_exist', (req, res) => {  
  
  connection.query(`SELECT  ${req.query.exist_column1} FROM ${req.query.exist_table1} WHERE ${req.query.exist_not} ( SELECT * FROM ${req.query.exist_table2} WHERE ${req.query.exist_condition2} )`, (err, result) => {
  if (err) console.log('fail!', err)
  var string=JSON.stringify(result); 
  var data = JSON.parse(string)
  console.log(data)
  res.send(data);
  })

})
app.get('/find_Aggregate', (req, res) => {  

  if(req.query.Aggregate_condition=="")
  {
    connection.query(`SELECT  ${req.query.Aggregate_fun1}(${req.query.Aggregate_column1}) FROM ${req.query.Aggregate_table1}`, (err, result) => {
    if (err) console.log('fail!', err)
    var string=JSON.stringify(result); 
    var data = JSON.parse(string)
    console.log(data)
    res.send(data);
    })
  }
  else
  {
    connection.query(`SELECT  ${req.query.Aggregate_fun1}(${req.query.Aggregate_column1}) FROM ${req.query.Aggregate_table1} WHERE ${req.query.Aggregate_condition}`, (err, result) => {
    if (err) console.log('fail!', err)
    var string=JSON.stringify(result); 
    var data = JSON.parse(string)
    console.log(data)
    res.send(data);
    })
  }
})
app.get('/find_having', (req, res) => {
  if(req.query.Aggregate_where=="")
  {
    connection.query(`SELECT ${req.query.Aggregate_group}, ${req.query.agg_fun}(${req.query. Aggregate_col}) FROM ${req.query.having_table} GROUP BY ${req.query.Aggregate_group} HAVING ${req.query.Aggregate_having}`, (err, result) => {
    if (err) console.log('fail!', err)
    var string=JSON.stringify(result); 
    var data = JSON.parse(string)
    console.log(data)
    res.send(data);
    })    
  }
  else
  {
    connection.query(`SELECT ${req.query.Aggregate_group}, ${req.query.agg_fun}(${req.query. Aggregate_col}) FROM ${req.query.having_table} WHERE ${req.query.Aggregate_where} GROUP BY ${req.query.Aggregate_group} HAVING ${req.query.Aggregate_having}`, (err, result) => {
      if (err) console.log('fail!', err)
      var string=JSON.stringify(result); 
      var data = JSON.parse(string)
      console.log(data)
      res.send(data);
      })  
  }
})