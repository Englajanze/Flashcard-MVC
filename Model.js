class Model {
    constructor() {
        this.flashcards = [
            {id: 1, question: "Hello", answer: "Xin chao"},
            {id: 2, question: "Thank you", answer: "Cam on"},
            {id: 3, question: "My name is", answer: "Toi la"}
        ]
        this.flashcard = {}
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

    getFlashcard(id) {
        this.flashcards.find((flashcard) => {
            if (flashcard.id === id) {
                this.flashcard = flashcard
            }
        })
    }
}

class View {
    constructor() {
        this.app = this.getElement("#root")

        this.flashcardDiv = this.createElement("div", "flashcardDiv")
            this.flashcardFrontDiv = this.createElement("div", "flashcardFrontDiv")
                this.flashcardQuestion = this.createElement("h2", "flashcardQuestion")
                this.flashcardAnswer = this.createElement("h2", "flashcardAnswer")
                this.flashcardPressText = this.createElement("p", "flashcardPressText")
                this.flashcardButtonDiv = this.createElement("div", "flashcardButtonDiv")
                    this.flashcardEditButton = this.createElement("button", "flashcardEditButton")
                        this.flashcardEditButton.innerHTML = "🖊"
                    this.flashcardDeleteButton = this.createElement("button", "flashcardDeleteButton")
                    this.flashcardDeleteButton.innerHTML = "🗑"
        this.arrowDiv = this.createElement("div", "arrowDiv")
            this.backArrow = this.createElement("button", "backArrow")
                this.backArrow.innerHTML = "<"
            this.nextArrow = this.createElement("button", "nextArrow")
                this.nextArrow.innerHTML = ">"
            
            
        this.flashcardButtonDiv.append(this.flashcardDeleteButton, this.flashcardEditButton)
        this.flashcardFrontDiv.append(this.flashcardPressText, this.flashcardQuestion, this.flashcardButtonDiv, this.flashcardAnswer)
        this.flashcardDiv.append(this.flashcardFrontDiv)
        this.arrowDiv.append(this.backArrow, this.nextArrow)
        this.app.append(this.flashcardDiv, this.arrowDiv)
        

    }

    displayFlashcards(flashcards, flashcardsIndex) {
        if (flashcards.length === 0) {
            this.flashcardQuestion.innerHTML = "Add question..."
        } else {
            this.flashcardQuestion.innerHTML = flashcards[flashcardsIndex].question
            this.flashcardAnswer.innerHTML = flashcards[flashcardsIndex].answer
            this.flashcardDiv.id = flashcards[flashcardsIndex].id
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
    }

    bindNextArrow(handler) {
        this.nextArrow.addEventListener("click", event => {
            handler() // controller handleNextArrow
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

    this.onFlashcardListChanged(this.model.flashcards, 0)
    this.view.bindNextArrow(this.handleNextArrow)
    }

    onFlashcardListChanged = (flashcards, flashcardsIndex) => {
        this.view.displayFlashcards(flashcards, flashcardsIndex)
    }

    handleAddFlashcard = (questionText, answerText) => {
        this.model.addFlashcard(questionText, answerText)
    }
    
    handleEditFlashcard = (id, updatedQuestionText, updatedAnswerText) => {
        this.model.editFlashcard(id, updatedQuestionText, updatedAnswerText)
    }

    handleDeleteFlashcard = (id) => {
        this.model.deleteFlashcard(id)
    }

    handleNextArrow = () => {
        this.onFlashcardListChanged(this.model.flashcards, 1)
    }

}

const app = new Controller(new Model(), new View());