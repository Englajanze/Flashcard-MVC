export default class View {
    constructor() {
        this.app = this.getElement("#app")
  
        this.container = this.createElement("div", "container")
        this.header = this.createElement("header", "header")
            this.homeButton = this.createElement("button", "home-button")
                this.homeButtonSymbol = this.createElement("i", ["fa-solid", "fa-house"])
            this.topic = this.createElement("h1", "topic")
                this.topic.innerHTML = "Topic"
                this.topicEdit = this.createElement("i", ["fa-solid", "fa-pen"])
        this.topButtons = this.createElement("div", "top-buttons")
            this.buttonWrapperOne = this.createElement("div", "button-wrapper")
                this.backStartText = this.createElement("p", "back")
                    this.backStartText.innerHTML = "Back to start"
                this.backStartButton = this.createElement("button", "display-button")
                    this.backStartButtonSymbol = this.createElement("i", ["fa-solid", "fa-rotate-left"])
            this.buttonWrapperTwo = this.createElement("div", "button-wrapper")
                this.shuffleText = this.createElement("p", "shuffle")
                    this.shuffleText.innerHTML = "Shuffle"
                this.shuffleButton = this.createElement("button", "display-button")
                    this.shuffleButtonSymbol = this.createElement("i", ["fa-solid", "fa-shuffle"])
            this.buttonWrapperThree = this.createElement("div", "button-wrapper")
                this.addFlashcardButton = this.createElement("button", "new-card-btn")
                    this.addFlashcardButton.innerHTML = "Add flashcard"
        this.flashcardMain = this.createElement("div", "flashcard-div")     
            this.flashcardPaper = this.createElement("div", "flashcard-paper")
                this.editDiv = this.createElement("div", "edit-div")
                    this.editFlashcardButton = this.createElement("button", "edit-flashcard")
                        this.editFlashcardButtonSymbol = this.createElement("i", ["fa-solid", "fa-pen"])
                this.flashcardNote = this.createElement("div", "flashcard-note")
                    this.tapeSectionOne = this.createElement("div", "tape-section")
                    this.pattern = this.createElement("div", "pattern")
                        this.question = this.createElement("p", "question")
                            this.question.innerHTML = "Thank you"
                    this.tapeSectionTwo = this.createElement("div", "tape-section")
            this.pressForAnswer = this.createElement("p", "press-answer") 
                this.pressForAnswer.innerHTML = "PRESS TO SEE ANSWER"     
                
                    


                   this.pattern.append(this.question) 
                this.flashcardNote.append(this.tapeSectionOne, this.pattern, this.tapeSectionTwo)    
                    this.editFlashcardButton.append(this.editFlashcardButtonSymbol)   
                this.editDiv.append(this.editFlashcardButton)
            this.flashcardPaper.append(this.editDiv, this.flashcardNote, this.pressForAnswer)
        this.flashcardMain.append(this.flashcardPaper)        
                    /* Top Buttons */
        this.buttonWrapperThree.append(this.addFlashcardButton)
            this.shuffleButton.append(this.shuffleButtonSymbol)
        this.buttonWrapperTwo.append(this.shuffleText, this.shuffleButton)
            this.backStartButton.append(this.backStartButtonSymbol)
        this.buttonWrapperOne.append(this.backStartText, this.backStartButton)
        this.topButtons.append(this.buttonWrapperOne , this.buttonWrapperTwo, this.buttonWrapperThree)
                    /* Header */    
            this.topic.append(this.topicEdit)
            this.homeButton.append(this.homeButtonSymbol)
        this.header.append(this.homeButton, this.topic)
    this.container.append(this.header, this.topButtons, this.flashcardMain)
    this.app.append(this.container)


    
       /*  this.flashcardDiv = this.createElement("div", "flashcardDiv")
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
         */
  
    }
  
    displayFlashcards(flashcard) {
       /*  if (flashcard) {
            this.flashcardQuestion.innerHTML = flashcard.question
            this.flashcardAnswer.innerHTML = flashcard.answer
            this.flashcardFrontDiv.id = flashcard.id
        } else {
            this.flashcardQuestion.innerHTML = "Add question..."
            this.flashcardAnswer.innerHTML = ""
        } */
    }
  // TODO: fix no className error
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className.constructor === Array) {
            className.forEach(cssElement => {
                element.classList.add(cssElement)
            });
        } else if (className) element.classList.add(className)
  
        return element
    }
  
    getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
    }
  
    bindDeleteFlashcard(handler) {
       /*  this.flashcardDeleteButton.addEventListener('click', event => {
            const id = parseInt(event.target.parentElement.parentElement.id)
            console.log(event)
            handler(id)
        }) */
    }
  
    bindNextArrow(handler) {
       /*  this.nextArrow.addEventListener("click", event => {
                handler() // controller handleNextArrow
            
            console.log("View.bindNextArrow")
        }) */
    }
  
    bindPreviousArrow(handler) {
        /* this.backArrow.addEventListener("click", event => {
                handler()
        } ) */
    }
  }