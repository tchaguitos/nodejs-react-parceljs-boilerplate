const questionController = require('../controllers/question');

module.exports = (app) => {

  app.route('/v1/questions')
    .get(questionController.allQuestions)
    .post(questionController.newQuestion);
}