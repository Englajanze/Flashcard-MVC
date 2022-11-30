export default class Model {
    constructor() {
        this.flashcards = JSON.parse(localStorage.getItem('flashcards')) || [{id: 1, question: "Create a flashcard", answer: ":)"}]
        this.flashcards.length > 0 ? this.currentFlashcard = this.flashcards[0] : false
    }

    addFlashcard(question, answer) {
        const flashcard = {
            id: this.flashcards.length > 0 ? this.flashcards[this.flashcards.length - 1].id + 1 : 1,
            question: question,
            answer: answer
        }
        this.flashcards.push(flashcard)

        this.currentFlashcard = flashcard
  
        this._commit()
        this.onCounterChanged(this.counterChanged())
    }

    editFlashcard(id, updatedQuestion, updatedAnswer) {
       this.flashcards = this.flashcards.map((flashcard) => 
            flashcard.id === id ? {id: flashcard.id, question: updatedQuestion, answer: updatedAnswer} : flashcard,
        )
        this.currentFlashcard = this.flashcards[id - 1]
        this._commit()
        this.onCounterChanged(this.counterChanged())
    }
  
    deleteFlashcard(id) {
        let index = -1
        this.flashcards.find((flashcard, i) => {
            if (flashcard.id === id) {
                index = i
            }
        })

        if (index >= 0) {
            this.flashcards.splice(index, 1)
            
            if (this.currentFlashcard == undefined) return
            this.currentFlashcard = this.flashcards[index] || this.flashcards[index - 1]
            
            
            this._commit()
            this.onCounterChanged(this.counterChanged())
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

    counterChanged() {
       const counterAmount = this.flashcards.length
       const counterCurrent = this.flashcards.indexOf(this.currentFlashcard) + 1
       
       return  counterCurrent + "/" + counterAmount
    }

    getFirstFlashcard() {
        this.currentFlashcard = this.flashcards[0]

        this.onFlashcardChanged(this.currentFlashcard)
        this.onCounterChanged(this.counterChanged())
    }
    
    getNextFlashcard() {
        if (this.currentFlashcard === this.flashcards[this.flashcards.length - 1]) return
  
        const nextFlashcardIndex = this.flashcards.indexOf(this.currentFlashcard) + 1
        this.currentFlashcard = this.flashcards[nextFlashcardIndex]
  
        this.onFlashcardChanged(this.currentFlashcard)
        this.onCounterChanged(this.counterChanged())
    }
  
    getPreviousFlashcard() {
        if (this.currentFlashcard === this.flashcards[0]) return 
  
        const PreviousFlashcardIndex = this.flashcards.indexOf(this.currentFlashcard) - 1
        this.currentFlashcard = this.flashcards[PreviousFlashcardIndex]

        this.onFlashcardChanged(this.currentFlashcard)
        this.onCounterChanged(this.counterChanged())
    }

    shuffleFlashcards() {
        /* Randomize array in-place using Durstenfeld shuffle algorithm */
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        this.flashcards = shuffleArray(this.flashcards)
        this.currentFlashcard = this.flashcards[0]

        this.onFlashcardChanged(this.currentFlashcard)
        this.onCounterChanged(this.counterChanged())
    }
  
    bindFlashcardChanged(callback) {
        this.onFlashcardChanged = callback
      }

    bindCounterChanged(callback) {
        this.onCounterChanged = callback
      }

    _commit() {
    this.onFlashcardChanged(this.flashcard)
    localStorage.setItem('flashcards', JSON.stringify(this.flashcards))
    }
}

