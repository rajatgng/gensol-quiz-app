import axios from "axios";

import apiRoutes from "../constants/apiRoutes";
import { openTdbBaseUrl, QUESTIONS_COUNTS } from "../constants/constant";
import { QUIZ_DIFFICULTY } from "../constants/enum";
import { ICategoryAPIResponse, IQuestion, IQuestionsAPIResponse } from "../models/quiz";
import { shuffleArray } from "../utils/arrayUtils";

const openTdbAPI = axios.create({
    baseURL: openTdbBaseUrl,
});

/** 
 * Fetch categories for questions type
 * @returns Categories
*/
export const fetchCategories = async () => {
    const res = await openTdbAPI.get<ICategoryAPIResponse>(apiRoutes.quiz.fetchCategories);

    return res.data.trivia_categories.map(i => ({ ...i, id: i.id.toString() }))
}


/** 
 * Fetch questions based on category and difficulty label
 * @param categoryId - category of questions 
 * @param difficulty - easy, medium, hard
 * @returns Questions
*/
export const fetchQuestions = async (categoryId?: string, difficulty?: QUIZ_DIFFICULTY): Promise<IQuestion[]> => {
    const res = await openTdbAPI.get<IQuestionsAPIResponse>(apiRoutes.quiz.fetchQuestions, {
        params: {
            amount: QUESTIONS_COUNTS,
            type: "multiple",
            category: categoryId,
            difficulty,
        },

    });


    return res.data.results.map(({ question, correct_answer, incorrect_answers }) => ({
        question: question,
        answer: correct_answer,
        options: shuffleArray([...incorrect_answers, correct_answer])
    }))
}
