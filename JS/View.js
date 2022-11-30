export default class View {
    constructor() {
        let stopPressCard = false;
        let addFlashcard = false;

        this.app = this.getElement("#root")
  
        this.container = this.createElement("div", "container")

                    /* Header */
        this.header = this.createElement("header", "header")
            this.homeButton = this.createElement("button", "home-button")
                this.homeButtonSymbol = this.createElement("i", ["fa-solid", "fa-house"])
            this.topic = this.createElement("h1", "topic")
                this.topic.innerHTML = "Flashcards"
              //  this.topicEdit = this.createElement("i", ["fa-solid", "fa-pen"])
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
                this.addFlashcardButton = this.createElement("button", "primary-btn")
                    this.addFlashcardButton.innerHTML = "Add flashcard"
                      /* Flashcard */
        this.flashcardMain = this.createElement("div", "flashcard-div")     
            this.flashcardPaper = this.createElement("div", "flashcard-paper")
                this.editDiv = this.createElement("div", "edit-div")
                    this.deleteFlashcardButton = this.createElement("button", ["delete-btn", "primary-btn", "remove"])
                        this.deleteFlashcardButton.innerHTML = "Delete"
                        this.saveButton = this.createElement("button", ["save-btn", "primary-btn", "remove"])
                            this.saveButton.innerHTML = "Save"
                    this.editFlashcardButton = this.createElement("button", "edit-flashcard")
                        this.editFlashcardButtonSymbol = this.createElement("i", ["fa-solid", "fa-pen"])
                this.flashcardNote = this.createElement("div", "flashcard-note")
                    this.tapeSectionOne = this.createElement("div", ["tape-section", "tape-section-color"])
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
                this.editDiv.append(this.deleteFlashcardButton,  this.saveButton , this.editFlashcardButton)
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
         //   this.topic.append(this.topicEdit)
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

  /*   get _flashcardQuestion() {
        return this.question.value
    }

    get _flashcardAnswer() {
        return this.answer.value
    } */

  // TODO: fix no className error, error when not adding a className
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
  
                /* BINDS */

    bindDeleteFlashcard(handler) {
        this.deleteFlashcardButton.addEventListener('click', event => {
            event.stopPropagation()
            // TODO: Update path with composedPath
              const id = parseInt(event.path[2].childNodes[1].id)
             handler(id)
            console.log(event)

            this.stopPressCard = false;
            this.question.classList.remove("align-text-edit")
            this.answer.classList.remove("align-text-edit")
            this.pressForAnswer.innerHTML = "PRESS TO SEE ANSWER"
            this.editFlashcardButton.classList.remove("remove")
            this.deleteFlashcardButton.classList.add("remove")
            this.saveButton.classList.add("remove")
            this.question.contentEditable = "false"
            this.answer.contentEditable = "false"
            this.answer.classList.add("remove")
            this.tapeSectionTwo.classList.remove("tape-section-color")
            this.tapeSectionTwo.title=''
        })
    }
  
    bindNextArrow(handler) {
        this.nextArrow.addEventListener("click", event => {
                handler() // controller handleNextArrow
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


    bindShuffle(handler) {
        this.shuffleButton.addEventListener("click", event => {
            handler()
        } )
    }
    
    bindPressCard(handler) {
        this.flashcardPaper.addEventListener("click", event => {
            handler()

            if (this.stopPressCard) return 

            if (this.answer.classList.contains("remove")) {
                this.answer.classList.remove("remove")
                this.question.classList.add("remove")      
                this.tapeSectionOne.title=''
                this.tapeSectionTwo.title='ANSWER'
                this.tapeSectionTwo.classList.add("tape-section-color")
                this.tapeSectionOne.classList.remove("tape-section-color")
                this.pressForAnswer.innerHTML = "PRESS TO SEE QUESTION"

            } else  {
                this.answer.classList.add("remove")
                this.question.classList.remove("remove")
                this.tapeSectionOne.title='QUESTION'
                this.tapeSectionTwo.title=''
                this.tapeSectionOne.classList.add("tape-section-color")
                this.tapeSectionTwo.classList.remove("tape-section-color")
                this.pressForAnswer.innerHTML = "PRESS TO SEE ANSWER"
            }
        })
    }

    bindAddFlashcard(handler) {
        this.addFlashcardButton.addEventListener("click", event => {
            handler()
            this.addFlashcard = true;
            this.stopPressCard = true;
            this.question.classList.add("align-text-edit")
            this.question.innerHTML = "Question"
            this.answer.classList.add("align-text-edit")
            this.answer.innerHTML = "Answer"
            this.answer.classList.remove("remove")
            this.question.classList.remove("remove")
            this.pressForAnswer.innerHTML = "PRESS QUESTION AND ANSWER TO WRITE"
            this.editFlashcardButton.classList.add("remove")
            this.deleteFlashcardButton.classList.remove("remove")
            this.saveButton.classList.remove("remove")
            this.question.contentEditable = "true"
            this.answer.contentEditable = "true"
            this.tapeSectionOne.title='QUESTION'
            this.tapeSectionTwo.title='ANSWER'
            this.tapeSectionTwo.classList.add("tape-section-color")
            this.tapeSectionOne.classList.add("tape-section-color")
        })
    }

    bindSaveFlashcard(handler) {
        this.saveButton.addEventListener("click", event => {
            if (this.addFlashcard) { // add flashcard
                handler(this.question.textContent, this.answer.textContent)
                this.addFlashcard = false;
            } else { // edit flashcard
                // TODO: Update path with composedPath
            const id = parseInt(event.path[2].childNodes[1].id)
                handler(this.question.textContent, this.answer.textContent, id)
            
        }
            event.stopPropagation()
            this.stopPressCard = false;
            this.question.classList.remove("align-text-edit")
            this.answer.classList.remove("align-text-edit")
            this.answer.classList.add("remove")
            this.question.classList.remove("remove")
            this.pressForAnswer.innerHTML = "PRESS TO SEE ANSWER"
            this.editFlashcardButton.classList.remove("remove")
            this.deleteFlashcardButton.classList.add("remove")
            this.saveButton.classList.add("remove")
            this.question.contentEditable = "false"
            this.answer.contentEditable = "false"
            this.tapeSectionTwo.title=''
            this.tapeSectionTwo.classList.remove("tape-section-color")
        })
    }

    bindEditFlashcard(handler) {
        this.editFlashcardButton.addEventListener("click", event => {
            handler()
            event.stopPropagation()
            this.stopPressCard = true;
            this.question.classList.add("align-text-edit")
            this.question.innerHTML = this.question.innerHTML
            this.answer.classList.add("align-text-edit")
            this.answer.innerHTML = this.answer.innerHTML
            this.answer.classList.remove("remove")
            this.question.classList.remove("remove")
            this.pressForAnswer.innerHTML = "PRESS QUESTION AND ANSWER TO EDIT"
            this.editFlashcardButton.classList.add("remove")
            this.deleteFlashcardButton.classList.remove("remove")
            this.saveButton.classList.remove("remove")
            this.question.contentEditable = "true"
            this.answer.contentEditable = "true"

            this.tapeSectionOne.title='QUESTION'
            this.tapeSectionTwo.title='ANSWER'
            this.tapeSectionTwo.classList.add("tape-section-color")
            this.tapeSectionOne.classList.add("tape-section-color")
        })
    }

  }

