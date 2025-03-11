import "../../public/styles/pages.css";

export default function Page1() {
  return (
    <div className="screen">
      <div className="qc">
        <h1 className="firsttitle">QUESTION 1</h1>
        <div className="choices">
          <div className="choice joy"></div>
          <div className="choice sadness"></div>
          <div className="choice anger"></div>
          <div className="choice love"></div>
        </div>
      </div>
      <div className="question">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corporis.</p>
      </div>
    </div>
  );
}
