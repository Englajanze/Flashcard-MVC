export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
  
    this.onFlashcardChanged(this.model.currentFlashcard)
    this.view.bindNextArrow(this.handleNextArrow)
    this.model.bindFlashcardChanged(this.onFlashcardChanged)
    this.view.bindDeleteFlashcard(this.handleDeleteFlashcard)
  
    this.view.bindPreviousArrow(this.handlePreviousArrow)
  
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
  
    handlePreviousArrow = () => {
        this.model.getPreviousFlashcard()
    }
  }