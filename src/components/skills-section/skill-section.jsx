import "./skill-section.css";
import ProgressBar from "../../reusable-components/progress-bar-component/progress-bar-component.jsx";

function SkillsSection() {
  let progressList = [
    { text: "HTML", value: "90" },
    { text: "Css", value: "90" },
    { text: "JavaScript", value: "80" },
    { text: "React", value: "80" },
    { text: "PhotoShop", value: "90" },
    { text: "Adobe XD", value: "80" },
    { text: "Node js", value: "60" },
    { text: "Wordpress", value: "40" },
  ];

  let focusList = [
    { text: "UI/UX Design" },
    { text: "Responsive Desig" },
    { text: "Web Design" },
    { text: "Web App Design" },
  ];
  return (
    <div id="skills" className="Skills bg-dark">
      <section className="h-100 container">
        <div className=" text-center text-light w-100 h-100  d-flex flex-column justify-content-center align-items-center p-5 gap-4">
          <h2 className="fs-1 fw-bolder  ">Skills</h2>
          <div className="d-flex  flex-column justify-content-center align-items-start gap-2 ">
            <p className="lead text-justify text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              recusandae qui alias eligendi voluptatum. Officia veritatis
              aspernatur iste, amet omnis iusto? Alias odit suscipit cupiditate
              quis vero autem repudiandae aspernatur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero recusandae qui alias eligendi
              voluptatum. Officia veritatis aspernatur iste, amet omnis iusto?
              Alias odit suscipit cupiditate quis vero autem repudiandae
              aspernatur?
            </p>
          </div>
          <div className="d-flex w-100  justify-content-center align-items-center">
            <div className=" d-flex col-6 flex-column justify-content-center align-items-center">
              <h2 className="fs-3 fw-bold p-1 ">My Focus</h2>
              <div className="w-75 border-bottom border-3 border-light"></div>
              <ul className="list-unstyled fs-5 p-3 d-flex flex-column justify-content-center align-items-start w-75">
                {focusList.map((item, index) => (
                  <li key={`li${index}`}>{item.text}</li>
                ))}
                {/* <li>UI/UX Design</li> <li>Responsive Design</li>
                <li>Web Design</li> <li>Web App Design</li> */}
              </ul>
            </div>
            <div className=" w-100  ">
              {progressList.map((item, index) => (
                <ProgressBar
                  key={`bar-${index}`}
                  text={item.text}
                  value={item.value}
                ></ProgressBar>
              ))}
              {/* <ProgressBar text="HTML" value="90"></ProgressBar>
              <ProgressBar text="Css" value="90"></ProgressBar>
              <ProgressBar text="JavaScript" value="80"></ProgressBar>
              <ProgressBar text="React" value="80"></ProgressBar>
              <ProgressBar text="PhotoShop" value="90"></ProgressBar>
              <ProgressBar text="Adobe XD" value="80"></ProgressBar>
              <ProgressBar text="Node js" value="60"></ProgressBar>
              <ProgressBar text="Wordpress" value="40"></ProgressBar> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsSection;
