const express= require ('express');
const router= express.Router();
const pool = require('./queries.js');

  //Menampilkan data seluruh list film
  router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film ', (err, result) => {
      if (err) {
        console.error( err);
      } else {
        if (result.rows.length === 0) {
        } else {
          res.send(result.rows);
        }
      }
    });
  });

  //Menampilkan data film tertentu berdasarkan id
  router.get('/film/:filmId', (req, res) => {
    const filmId = req.params.filmId;
    pool.query('SELECT * FROM film WHERE film_id = $1', [filmId], (err, result) => {
      if (err) {
        console.error( err);
      } else {
        if (result.rows.length === 0) {
        } else {
          res.send(result.rows);
        }
      }
    });
  });

 //  Menampilkan data list category
  router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category ', (err, result) => {
      if (err) {
        console.error( err);
      } else {
        if (result.rows.length === 0) {
        } else {
          res.send(result.rows);
        }
      }
    });
  });

// Menampilkan data list film berdasarkan category
router.get('/film/category/:categoryid', (req, res) => {
  const categoryid = req.params.categoryid;
  pool.query(
      'SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1',
      [categoryid],
      (err, result) => {
        if (err) {
          console.error( err);
        }
        res.send(result.rows);
          
      }
  );
});

  module.exports = router