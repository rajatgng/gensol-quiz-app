export interface ICategory {
    id: string;
    name: string;
}

export interface IQuestion {
    question: string;
    answer: string;
    options: string[];
}

export interface ICategoryAPIResponse {
    trivia_categories: ICategory[]
}

export interface IQuestionsAPIResponse {
    response_code: number;
    results: {
        category: string;
        correct_answer: string;
        difficulty: string;
        type: string;
        question: string;
        incorrect_answers: string[];
    }[]
}
