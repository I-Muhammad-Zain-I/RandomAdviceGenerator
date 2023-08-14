# RandomAdviceGenerator <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> </a> </p>
Simple Advice Generator with the Advice Contextual Image

- This advice Generator first fetches the Advice from **https://api.adviceslip.com/advice** API
- It then apply some basic stemming to remove unnecessary words from advice and passes a single arbitrary list keyword to
  pixabay API **https://pixabay.com/api**

### limitations
- Stemming is not precise due to fixed number of words being removed
- Sometimes the image is either not found or Image is inappropriate with respect to context

## Parts 
There are two parts of this small application
- Advice generator (followed tutorial from [JavaScript Mastery's Quote Generator Video](https://www.youtube.com/watch?v=o5CdCETh8cQ))
- Image Display (coded by [me](https://github.com/I-Muhammad-Zain-I))
