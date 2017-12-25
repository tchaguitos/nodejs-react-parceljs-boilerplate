const mongoose = require('mongoose');
const modelQuestion = mongoose.model('question');

let questionController = {};

questionController.allQuestions = (req, res) => {

  modelQuestion.find()
    .then(results => res.json(results))
    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
}

questionController.newQuestion = (req, res) => {

  let newQuestion = new modelQuestion(req.body);

  newQuestion.save()
    .then(() => res.json({ success: true, message: 'Question created with success!', statusCode: 201 }))
    .catch(err => res.json({ success: false, message: err, statusCode: 500 }));
}

module.exports = questionController;