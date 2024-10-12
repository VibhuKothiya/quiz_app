const express = require('express');
const { getQuizzes, getQuizById, createQuiz, updateQuiz, deleteQuiz } = require('../controllers/quizController');

const router = express.Router();

router.route('/create')
    .post(createQuiz);

router.route('/get')
    .get(getQuizzes);

router.route('/:id')
    .get(getQuizById);

router.route('/:id')
    .put(updateQuiz);

router.route('/:id')
    .delete(deleteQuiz);

module.exports = router;

