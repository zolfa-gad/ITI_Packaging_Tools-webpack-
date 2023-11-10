import Button from "../../reusable-components/button-component/button-component.jsx";
import "./about-me-section.css";

function AboutMeSection() {
  return (
    <div id="about" className="About ">
      <section className="h-100 container">
        <div className=" text-center text-dark w-100 h-100  d-flex justify-content-center align-items-center p-5 gap-4">
          <h2 className="fs-1 fw-bolder col-3 align-self-start">About Me</h2>
          <div className="d-flex  flex-column justify-content-center align-items-start gap-2 ">
            <p className="lead text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              recusandae qui alias eligendi voluptatum. Officia veritatis
              aspernatur iste, amet omnis iusto? Alias odit suscipit cupiditate
              quis vero autem repudiandae aspernatur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero recusandae qui alias eligendi
              voluptatum. Officia veritatis aspernatur iste, amet omnis iusto?
              Alias odit suscipit cupiditate quis vero autem repudiandae
              aspernatur?
            </p>
            <Button text="Download Resume" color="btn-dark"></Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMeSection;
