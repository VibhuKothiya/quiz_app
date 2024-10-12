const Quiz = require('../models/Quiz');
const ErrorResponse = require('../utils/errorResponse');




// Create a new quiz
exports.createQuiz = async (req, res, next) => {
    try {
        const quiz = await Quiz.create(req.body);
        res.status(201).json({
            success: true,
            data: quiz
        });
    } catch (err) {
        next(err);
    }
};

// Get all quizzes
exports.getQuizzes = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json({
            success: true,
            data: quizzes
        });
    } catch (err) {
        next(err);
    }
};

// Get a quiz by ID
exports.getQuizById = async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return next(new ErrorResponse('Quiz not found', 404));
        }
        res.status(200).json({
            success: true,
            data: quiz
        });
    } catch (err) {
        next(err);
    }
};



// Update a quiz
exports.updateQuiz = async (req, res, next) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!quiz) {
            return next(new ErrorResponse('Quiz not found', 404));
        }
        res.status(200).json({
            success: true,
            data: quiz
        });
    } catch (err) {
        next(err);
    }
};

// Delete a quiz
exports.deleteQuiz = async (req, res, next) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) {
            return next(new ErrorResponse('Quiz not found', 404));
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
};
