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
       this.flashcards = this.flashcards.map((flashcard) => 
            flashcard.id === id ? {id: flashcard.id, question: updatedQuestion, answer: updatedAnswer} : flashcard,
        )
    }

    deleteFlashcard(id) {
        let index = -1
        this.flashcards.find((flashcard, i) => {
            if (flashcard.id === id) {
                index = i
            }
        })
       if (index > 0) this.flashcards.splice(index, 1)
    }
}

class View {
    constructor() {
        
    }

    getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View());