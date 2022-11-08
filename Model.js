class Model {
    constructor() {
        this.flashcards = [
            {id: 1, question: "Hello", answer: "Xin chao"},
            {id: 2, question: "Thank you", answer: "Cam on"},
            {id: 3, question: "My name is", answer: "Toi la"}
        ]
        if (this.flashcards.length > 0) this.currentFlashcard = this.flashcards[0]
        else false

        console.log("Update")
    }
    addFlashcard(question, answer) {
        const flashcard = {
            id: this.flashcards.length > 0 ? this.flashcards[this.flashcards.length - 1].id + 1 : 1,
            question: question,
            answer: answer
        }
        this.flashcards.push(flashcard);

        this.onFlashcardChanged(this.currentFlashcard)
    }
    editFlashcard(id, updatedQuestion, updatedAnswer) {
       this.flashcards = this.flashcards.map((flashcard) => 
            flashcard.id === id ? {id: flashcard.id, question: updatedQuestion, answer: updatedAnswer} : flashcard,
        )
        this.onFlashcardChanged(this.currentFlashcard)
    }

    deleteFlashcard(id) {
        console.log("Model deleteFlashcard", id)
        let index = -1
        this.flashcards.find((flashcard, i) => {
            if (flashcard.id === id) {
                index = i
            }
        })
       if (index >= 0) {
        this.flashcards.splice(index, 1)
        this.currentFlashcard = this.flashcards[index + 1]
        }

       this.onFlashcardChanged(this.currentFlashcard)
    }

    
    getFlashcard(id) {
        this.flashcards.find((flashcard) => {
            if (flashcard.id === id) {
                this.currentFlashcard = flashcard
            }
        })

        this.onFlashcardChanged(this.currentFlashcard)
    }
    
    getNextFlashcard() {
        this.currentFlashcard = this.flashcards.find((flashcard) => {
            return flashcard.id === (this.currentFlashcard.id + 1)
        })

        this.onFlashcardChanged(this.currentFlashcard)
    }

    bindFlashcardChanged(callback) {
        this.onFlashcardChanged = callback
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

    displayFlashcards(flashcard) {
        if (flashcard) {
            this.flashcardQuestion.innerHTML = flashcard.question
            this.flashcardAnswer.innerHTML = flashcard.answer
            this.flashcardFrontDiv.id = flashcard.id
        } else {
            this.flashcardQuestion.innerHTML = "Add question..."
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

    bindDeleteFlashcard(handler) {
        this.flashcardDeleteButton.addEventListener('click', event => {
            const id = parseInt(event.target.parentElement.parentElement.id)
            console.log(id)
            handler(id)
        })
    }

    bindNextArrow(handler) {
        this.nextArrow.addEventListener("click", event => {
            handler() // controller handleNextArrow
            console.log("View.bindNextArrow")
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

    this.onFlashcardChanged(this.model.currentFlashcard)
    this.view.bindNextArrow(this.handleNextArrow)
    this.model.bindFlashcardChanged(this.onFlashcardChanged)
    this.view.bindDeleteFlashcard(this.handleDeleteFlashcard)
    }

    onFlashcardChanged = (flashcard) => {
        this.view.displayFlashcards(flashcard)
    }

    handleAddFlashcard = (questionText, answerText) => {
        this.model.addFlashcard(questionText, answerText)
    }
    
    handleEditFlashcard = (id, updatedQuestionText, updatedAnswerText) => {
        this.model.editFlashcard(id, updatedQuestionText, updatedAnswerText)
    }

    handleDeleteFlashcard = (id) => {
        console.log("handleDeleteFlashcard", id)
        this.model.deleteFlashcard(id)
    }

    handleNextArrow = () => {
        console.log("controller.handleNextArrow")
        this.model.getNextFlashcard()
    }

}

const app = new Controller(new Model(), new View());