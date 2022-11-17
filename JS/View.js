export default class View {
    constructor() {
        this.app = this.getElement("#app")
  
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
            console.log(event)
            handler(id)
        })
    }
  
    bindNextArrow(handler) {
        this.nextArrow.addEventListener("click", event => {
                handler() // controller handleNextArrow
            
            console.log("View.bindNextArrow")
        })
    }
  
    bindPreviousArrow(handler) {
        this.backArrow.addEventListener("click", event => {
                handler()
        } )
    }
  }