
import tracker from '../assets/tracker.jpg'
import readme from '../assets/readme.jpg'
import vehicle from '../assets/vehicle.jpg'
import movie from '../assets/movie.jpg'
import movie2 from '../assets/movie2.jpg'
import weather from '../assets/weather.jpg'

export default function Portfolio() {
  const titleStyle = {
    padding: "20px",
    fontSize: "50px",
    margin: "50px",
    textAlign: "center",
  };

  const gridStyle = { // grid style properties and use from mdn webdocs
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px", 
    padding: "20px",
  };

  const cardStyle = {
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px",
  };

  const imageStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const link = {
    textDecoration: 'none',
    color: 'white',
  }
  const projects = [
    {
      title: "Employee Tracker",
      img: tracker, 
      github: "https://github.com/owengx/Employee-Tracker", 
    },
    {
      title: "README Generator",
      img: readme,
      github: "https://github.com/owengx/professional-readme-generator",
    },
    {
      title: "Vehicle Builder",
      img: vehicle,
      github: "https://github.com/owengx/Vehicle-Builder",
    },
    {
      title: "Movie-Review Group Project",
      img: movie,
      github: "https://github.com/J0263/Movie-Review",
    },
    {
      title: "Gruesome Goonz Group Project",
      img: movie2,
      github: "https://github.com/KyreeJ/project-1",
    },
    {
      title: "Weather App",
      img: weather,
      github: "https://github.com/owengx/my-weather-app",
    },
  ];

  return (
    <div>
      <h1 style={titleStyle}>Portfolio</h1>
      <div style={gridStyle}>
        {projects.map((project, index) => ( // iterates over project array
          <div key = {index} style={cardStyle}>
            <img src={project.img}  style={imageStyle}  />
            <h3>{project.title}</h3>
            <p>
              <a href={project.github} target="_blank" style ={link}>
               GitHub Repository
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
