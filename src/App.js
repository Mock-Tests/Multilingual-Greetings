import {Component} from 'react'

import './App.css'

import LanguageContext from './ReactContext'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: 'English',
  }

  changeLanguage = value => {
    this.setState({activeLanguage: value})
  }

  render() {
    const {activeLanguage} = this.state
    const selected = languageGreetingsList.find(
      each => each.buttonText === activeLanguage,
    )
    const {imageUrl, imageAltText} = selected

    return (
      <LanguageContext.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <div className="main-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="btn-container">
            {languageGreetingsList.map(each => (
              <li key = {each.id}>
                <button
                  className={`btn ${
                    activeLanguage === each.buttonText ? 'selected-btn' : ''
                  }`}
                  type="button"
                  onClick={() => this.changeLanguage(each.buttonText)}
                >
                  {each.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img className="img" src={imageUrl} alt={imageAltText} />
        </div>
      </LanguageContext.Provider>
    )
  }
}

export default App
