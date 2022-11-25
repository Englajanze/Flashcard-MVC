export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
  
    this.onFlashcardChanged(this.model.currentFlashcard)
    this.onCounterChanged(this.model.counterChanged())
    this.view.bindNextArrow(this.handleNextArrow)
    this.model.bindFlashcardChanged(this.onFlashcardChanged)
    this.model.bindCounterChanged(this.onCounterChanged)
    this.view.bindDeleteFlashcard(this.handleDeleteFlashcard)
    this.view.bindBackToStart(this.handleBackToStart)
    this.view.bindShuffle(this.handleShuffle)
    this.view.bindPressCard(this.handlePressCard)
    this.view.bindPreviousArrow(this.handlePreviousArrow)
    this.view.bindAddFlashcard(this.handleAddFlashcards)
    this.view.bindSaveFlashcard(this.handleSaveFlashcards)
  
    }
  
    onFlashcardChanged = (flashcard) => {
        this.view.displayFlashcards(flashcard)
    }
    
    onCounterChanged = (counterValues) => {
        this.view.displayCounter(counterValues)
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

    handleBackToStart = () => {
        this.model.getFirstFlashcard()
    }
  
    handleNextArrow = () => {
        this.model.getNextFlashcard()
    }
  
    handlePreviousArrow = () => {
        this.model.getPreviousFlashcard()
    }

    handleShuffle = () => {
        this.model.shuffleFlashcards()
    }
        
    handlePressCard = () => {}

    handleSaveFlashcards = (flashcardQuestion, flashcardAnswer) => {
        console.log("handleAddFlashcards", flashcardQuestion, flashcardAnswer)
        this.model.addFlashcard(flashcardQuestion, flashcardAnswer)
    }

    handleAddFlashcards = () => {}
}