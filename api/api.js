// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 3000; // Change this to your desired port

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Mocked token
// let token = 'your_mocked_token';

// // Mocked response for the POST request
// app.post('/api/V1/register', (req, res) => {
//   const { is_strict, form_data } = req.body;
//   let headers = {};

//   if (is_strict) {
//     headers['authorization'] = 'bearer ' + token;
//   }

//   if (form_data) {
//     headers['content-type'] = 'multipart/form-data';
//   }

//   // Respond with a mocked successful response
//   res.status(200).json({
//     message: 'Mock POST request successful',
//     headers: headers,
//     data: req.body.data, // Echo back the provided data
//   });
// });

// // Start the Express.js server
// app.listen(port, () => {
//   console.log(`Mock API server is running on port ${port}`);
// });
