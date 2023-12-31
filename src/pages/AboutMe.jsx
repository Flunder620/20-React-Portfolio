import "./css/AboutMe.scss";

export default function AboutMe() {
  return (
    <>
      <div>
        <h1>About Me</h1>
        <img
          className="cropped"
          title="Danny Devito placeholder picture"
          src="..\src\assets\images\dd.jpg"
        ></img>
        <div className="about-me-div">
          <p className="about-me-text">
            I am currently a full-stack web developer student with a passion for
            learning. I have always had a talent for all things computers and I
            love coding. I really enjoy the process and adapting to challenges
            that arise. I have a mechanical background and enjoy working on
            vehicles however I also have an affinity for technology. One of my
            favorite hobbies is gaming and my current favorite game is Rocket
            League. I am also an animal lover and have one dog.
          </p>
        </div>
      </div>
    </>
  );
}
