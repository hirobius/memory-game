# Requirements

## What is the vision of this product?

Build a functional Memory Game that is fun and educational

## What pain point does this project solve?

Fun learning

## Why should we care about your product?

This product will exercises the brain by:
  
  - improve brain functions, concentration, focus and attention to detail
  
  - improve/train visual recognition
  
  - improve short-term memory, which can help develop long-term memory
  
  - improve vocabulary


---


## Scope IN

**DIFFICULTY MODES**
- Differing tile counts
- Different imagery complexity

**TIMER**
- Faster completion = more points!

**LEADERBOARD**
- Graph that records user performance per session

**ATTEMPTS COUNTER**
- Displays current amount of attempts / match guesses

**SCORE COUNTER**
- Displays current score 
- Displays current performance tier

## Scope OUT
- Multiplayer
- Persistent Storage


## Minimum Viable Product

- 1 difficulty mode
- greyscale
- no audio
- no animation
- no timer
- "About the Team" scene
- "Play" scene
- "Leaderboard" scene
- # attempts is the "score"

## What are your stretch goals?

- 3D Animations
- Hint Tool / Power up
- Google Font Integration
- Disabled User: “Accessibility mode”
- Parent with Children: Alphabet Mode (Click Letter and match to Illustration)
- Star Rating integration with Timer and Moves counter
- Leaderboards relevant to difficulty
- Bonus: First Flip!
- Bonus: Concurrent matches
- Helper lifelines with score decrements (50/50 etc)
- Instructions / Scoring Breakdown (Bonuses)
- Media Player
- "Clear Scores" action / time-based or clear local storage manually
- Group matches / pairs

## Functional Requirements

- A fun Memory Game that stores the user's score in a leaderboard

## Data Flow

- The user presses "PLAY", chooses a difficulty and begins clicking tiles to find matches / pairs
- There is a running score that increments based on the click attempts and the time surpassed. Less time = more points!
- Upon completion of matching the card grid, the user is alerted with a congratulations modal
- From here, the user has the option to either PLAY AGAIN or VIEW LEADERBOARD
- The ABOUT THE TEAM scene can be viewed from the PLAY scene
