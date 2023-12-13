import './css/Portfolio.scss'

export default function Portfolio() {
  return (
    <>
      <h1>Projects and Applications I've created:</h1>
      <p>Click titles for Github Link and picture for deployed app!</p>
      <div className="projects">
        <a href='https://dnd-character-generator-app-3900836cda13.herokuapp.com/' target="_blank"  id="marvel-api-app" className="preview">
            <a href='https://github.com/coding-bootcamp-project2/bootcamp-project2' target="_blank">Marvel API App</a>
        </a>
        <a href='https://dnd-character-generator-app-3900836cda13.herokuapp.com/' target="_blank"  id="dnd-app" className="preview">
            <a href='https://github.com/coding-bootcamp-project2/bootcamp-project2' target="_blank">Dungeons and Dragons Character Creator</a>
        </a>
        <a href='https://flunder620.github.io/Password-Generator/' target="_blank"  id="password-generator" className="preview">
            <a href='https://github.com/Flunder620/Password-Generator' target="_blank">Password Generator</a>
        </a>
        <a href='https://flunder620.github.io/Weather-Dashboard/' target="_blank"  id="weather-app" className="preview">
            <a href='https://github.com/Flunder620/Weather-Dashboard' target="_blank">Weather API Application</a>
        </a>
        <a href='https://flunder620.github.io/Work-Day-Scheduler/' target="_blank"  id="schedule-app" className="preview">
            <a href='https://github.com/Flunder620/Work-Day-Scheduler' target="_blank">Work Day Scheduler</a>
        </a>
        <a href='https://flunder620.github.io/code-quiz/' target="_blank"  id="code-quiz-app" className="preview">
            <a href='https://github.com/Flunder620/code-quiz' target="_blank">Code Quiz</a>
        </a>
      </div>
    </>
  );
}
