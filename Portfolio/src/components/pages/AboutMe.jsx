import IMG from '../assets/img.jpg'
export default function About() {
  const mystyle = {
    padding: "20px",
    fontSize: "50px",
    margin: "50px"
  }
  const mystyle2 = {
    padding: "20px",
    fontSize: "20px",
    margin: "50px",
  }

  const pic = {
    float: 'left',
    margin: '30px',
    width: '250px',
    borderRadius: '10px',
  }
  return (
    <div>
      <h1 style={mystyle}>About Page</h1>
      <img src={IMG} style={pic} />
      <p style={mystyle2}>
        I am a current student at University of Central Florida and I am eager to further develop my skills and build long
        lasting expertise through practical applications. I'm a US veteran
        presently working as a real estate sales associate with Keller
        Williams. I currently hold a high school diploma and Associates
        of Science in Cybersecurity Degree and am seeking to build my
        skills as a web developer through the University of Central
        Florida’s coding program and add several necessary skills to my portfolio. I have worked in numerous
        industries in the past to include but not limited to the
        Department of Defense, real estate, food service and
        pharmaceuticals. My prior experience in risk assessments and
        problem-solving has equipped me with a unique perspective
        and the ability to approach challenges methodically. I
        understand that every position requires a unique set of skills,
        and I am committed to continually developing my abilities to
        meet those needs. If I do not possess a particular quality
        necessary for the role, I am proactive in seeking out resources
        and training to acquire it.
      </p>
    </div>
  );
}

