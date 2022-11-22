export default class Model {
    constructor() {
        this.flashcards = [
            {id: 1, question: "Hello", answer: "Xin chao"},
            {id: 2, question: "Thank you", answer: "Cam on"},
            {id: 3, question: "My name is", answer: "Toi la"},
            {id: 4, question: "How are you?", answer: "Khỏe không?"},
            {id: 5, question: "Very good, thank you", answer: "Được rồi, cảm ơn cô"}
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
            
            if (this.currentFlashcard == undefined) return
            console.log(index)
            this.currentFlashcard = this.flashcards[index] || this.flashcards[index - 1]
            
            
            this.onFlashcardChanged(this.currentFlashcard)
        }
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
        if (this.currentFlashcard === undefined) return
        // console.log(this.currentFlashcard.id, this.flashcards[-1].id )
        if (this.currentFlashcard.id === this.flashcards[this.flashcards.length - 1].id) return 
  
            this.currentFlashcard = this.flashcards.find((flashcard) => {
            return flashcard.id === (this.currentFlashcard.id + 1)
        })
  
        this.onFlashcardChanged(this.currentFlashcard)
    }
  
    getPreviousFlashcard() {
        if (this.currentFlashcard === undefined) return
  
        if (this.currentFlashcard.id === this.flashcards[0].id) return 
  
        this.currentFlashcard = this.flashcards.find((flashcard) => {
            return flashcard.id === (this.currentFlashcard.id -1)
        })
        this.onFlashcardChanged(this.currentFlashcard)
    }
  
    bindFlashcardChanged(callback) {
        this.onFlashcardChanged = callback
      }
  }