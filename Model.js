class Model {
    constructor() {
        this.flashcards = [
            {id: 1, question: "Hello", answer: "Xin chao"},
            {id: 2, question: "Thank you", answer: "Cam on"},
            {id: 3, question: "My name is", answer: "Toi la"}
        ]
    }
    addFlashcard(question, answer) {
        const flashcard = {
            id: this.flashcards.length > 0 ? this.flashcards[this.flashcards.length - 1].id + 1 : 1,
            question: question,
            answer: answer
        }
        this.flashcards.push(flashcard);
    }
    editFlashcard(id, updatedQuestion, updatedAnswer) {
        this.flashcards = this.flashcards.map((flashcard) => {
            flashcard.id === id ? {id: flashcard.id, question: updatedQuestion, answer: updatedAnswer} : flashcard}
        )

    }

    deleteFlashcard(id) {
       this.flashcards.filter((flashcard) => {
        flashcard.id !== id
       })
    }
}

class View {
    constructor() {}
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View());