import './css/Portfolio.scss'

export default function Portfolio() {
  return (
    <>
      <h1>Projects and Applications I've created:</h1>
      <div className="projects">
        <a href='https://www.google.com/' target="_blank" id="password-generator" className="preview">
            <h3>Marvel API Application</h3>
        </a>
        <div id="password-generator" className="preview">
            <h3>Dungeons and Dragon Application</h3>
        </div>
        <div id="password-generator" className="preview">
            <h3>Password Generator Application</h3>
        </div>
        <div id="password-generator" className="preview">
            <h3>Weather API Application</h3>
        </div>
      </div>
    </>
  );
}
