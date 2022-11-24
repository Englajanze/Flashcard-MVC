export default class View {
    constructor() {
        this.app = this.getElement("#root")
  
        this.container = this.createElement("div", "container")

                    /* Header */
        this.header = this.createElement("header", "header")
            this.homeButton = this.createElement("button", "home-button")
                this.homeButtonSymbol = this.createElement("i", ["fa-solid", "fa-house"])
            this.topic = this.createElement("h1", "topic")
                this.topic.innerHTML = "Topic"
                this.topicEdit = this.createElement("i", ["fa-solid", "fa-pen"])
                          /* Top Buttons */
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
                      /* Flashcard */
        this.flashcardMain = this.createElement("div", "flashcard-div")     
            this.flashcardPaper = this.createElement("div", "flashcard-paper")
                this.editDiv = this.createElement("div", "edit-div")
                    this.editFlashcardButton = this.createElement("button", "edit-flashcard")
                        this.editFlashcardButtonSymbol = this.createElement("i", ["fa-solid", "fa-pen"])
                    this.deleteFlashcardButton = this.createElement("button", "delete-flashcard")
                        this.deleteFlashcardButtonSymbol = this.createElement("i", ["fa-solid", "fa-trash"])
                this.flashcardNote = this.createElement("div", "flashcard-note")
                    this.tapeSectionOne = this.createElement("div", "tape-section")
                        this.tapeSectionOne.title='QUESTION'
                    this.pattern = this.createElement("div", "pattern")
                        this.question = this.createElement("p", "question")
                        this.answer = this.createElement("p", ["answer", "remove"])
                            this.question.innerHTML = "Thank you"
                            this.answer.innerHTML = "Cam on"
                    this.tapeSectionTwo = this.createElement("div", "tape-section")
            this.pressForAnswer = this.createElement("p", "press-answer") 
                this.pressForAnswer.innerHTML = "PRESS TO SEE ANSWER"   
                          /* Arrows */  
                this.arrowButtons = this.createElement("div", "arrow-buttons")
                    this.backArrow = this.createElement("button", ["arrow", "back-arrow"])
                        this.backArrowSymbol = this.createElement("i", ["fa-solid" , "fa-chevron-left"])
                    this.counter = this.createElement("h3", "counter")
                        this.counter.innerHTML = "1/1"
                    this.nextArrow = this.createElement("button", ["arrow", "next-arrow"])
                        this.nextArrowSymbol = this.createElement("i", ["fa-solid" , "fa-chevron-right"])   

                     
                        /* Arrows */
                    this.nextArrow.append(this.nextArrowSymbol)
                    this.backArrow.append(this.backArrowSymbol)   
                this.arrowButtons.append(this.backArrow, this.counter, this.nextArrow)     
                          /* Flashcard */
                   this.pattern.append(this.question, this.answer) 
                this.flashcardNote.append(this.tapeSectionOne, this.pattern, this.tapeSectionTwo)    
                    this.editFlashcardButton.append(this.editFlashcardButtonSymbol) 
                    this.deleteFlashcardButton.append(this.deleteFlashcardButtonSymbol)  
                this.editDiv.append(this.deleteFlashcardButton, this.editFlashcardButton)
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
    this.container.append(this.header, this.topButtons, this.flashcardMain, this.arrowButtons)
    this.app.append(this.container)
  
    }
  
    displayCounter(counterValues) {
        // Counter
        this.counter.innerHTML = counterValues
    }

    displayFlashcards(flashcard) {
         if (flashcard) {
            // Flashcard
            this.question.innerHTML = flashcard.question
            this.answer.innerHTML = flashcard.answer
            this.flashcardNote.id = flashcard.id
           

        } else {
            this.flashcardQuestion.innerHTML = "Add question..."
            this.flashcardAnswer.innerHTML = ""
        } 
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
        this.deleteFlashcardButton.addEventListener('click', event => {
            event.stopPropagation()
            const id = parseInt(event.path[3].childNodes[1].id)
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

    bindBackToStart(handler) {
        this.backStartButton.addEventListener("click", event => {
            handler()
        } )
    }

    bindPressCard(handler) {
        this.flashcardPaper.addEventListener("click", event => {
            handler()

            if (this.answer.classList.contains("remove")) {
                this.answer.classList.remove("remove")
                this.question.classList.add("remove")      
                this.tapeSectionOne.title=''
                this.tapeSectionTwo.title='ANSWER'
            } else  {
                this.answer.classList.add("remove")
                this.question.classList.remove("remove")
                this.tapeSectionOne.title='QUESTION'
                this.tapeSectionTwo.title=''
            }
            }
        )
        }
    


  }

