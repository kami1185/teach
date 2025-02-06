import '../css/stylesCode.scss'
import { Link } from 'react-router-dom'
import react from '../../assets/react/react.svg';
import javascript from '../../assets/javascript/javascript.svg';
import git from '../../assets/git/git.svg';
import jest from '../../assets/jest/jest.svg';
import { useEffect, useRef } from 'react';
import MatrixText from '../../components/Profile/MatrixText ';


const ParticleBackground = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
    
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
  
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.8;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
    
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
        
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
    
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
  
        const init = () => {
            resizeCanvas();
            particles = Array.from({ length: 100 }, () => new Particle());
        };
    
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
            particle.update();
            particle.draw();
            });
            requestAnimationFrame(animate);
        };
  
        init();
        animate();
        window.addEventListener('resize', resizeCanvas);
    
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);
  
    return <canvas ref={canvasRef} className="particle-canvas" />;
};


const HeroSection = () => (
    <section className="hero">
        <div className="hero__content">
            <h1 className="hero__name">
                <span className="hero__name-gradient">ANDRES CAMILO DUARTE ERASO</span>
                {/* <span className="hero__name-gradient"></span> */}
            </h1>
            {/* <h2 className="hero__title">Front End Developer</h2> */}
            <MatrixText text={'Front End Developer'}/>
            <h3 className="hero__contact"><strong>andres.duarte@ucc.edu.co</strong></h3>
            <h3 className="hero__contact"><strong>+57 3186724639 (Colombia)</strong></h3>
            <h3 className="hero__contact"><strong>+39 3478222165 (Italy)</strong></h3>
        </div>
    </section>
);

const ProfileSection = ({ref}) => (
    <section ref={ref} className="section">
        <h2 className="section__title">Perfil</h2>
        <div className="profile-grid">
            <div className="profile-card">
            
            <p className="profile-text">
                Graduado en ingeniería informática con experiencia en proyectos internacionales 
                con la Universidad de Palermo (Italia), startups y empresas privadas. 
                Desarrollador Full Stack con 9 años de experiencia en React, JavaScript 
                y tecnologías backend como C#, Java y PHP.
            </p>
            <p className="profile-text">
                <strong>Inglés</strong>
            </p>
            <p className="profile-text">
                <strong>Italiano </strong> (Competencia Profesional)
            </p>
            </div>
            
        </div>
    </section>
);

const SkillsSection = ({ref}) => (
    <section ref={ref} className="section">
      <h2 className="section__title">Habilidades</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3 className="education-title">PROGRAMACION WEB</h3>
          <p className="education-detail">JAVASCRIPT</p>
          <p className="education-detail">HTML</p>
          <p className="education-detail">CSS</p>
          <p className="education-detail">REACT</p>
          <p className="education-detail">TYPESCRIPT</p>
          <p className="education-detail">GIT</p>
        </div>
        <div className="education-item">
          <h3 className="education-title">CLOUD COMPUTING</h3>
          <p className="education-detail">SISTEMAS DISTRIBUIDOS</p>
          
        </div>
      </div>
    </section>
);

const EducationSection = ({ref}) => (
    <section ref={ref} className="section">
      <h2 className="section__title">Educación</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3 className="education-title">Università degli Studi di Palermo</h3>
          <p className="education-detail">Palermo, Italy</p>
          <p className="education-detail">Ingeniero Informático | 2010 - 2015</p>
        </div>
        <div className="education-item">
          <h3 className="education-title">Universidad CESMAG</h3>
          <p className="education-detail">Pasto, Colombia</p>
          <p className="education-detail">Ingeniero de Sistemas</p>
        </div>
      </div>
    </section>
);

const MatrixButton = () => {
    return (
        <button className="matrix-button">
            [Entrar]
        </button>
    );
};

const Home = () => {

    const sectionRefs = useRef([]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
    
        sectionRefs.current.forEach((ref) => observer.observe(ref));
    
        return () => observer.disconnect();
    }, []);
    

    return (
        <>
            <div className="container-menu">
                <ParticleBackground />
                <HeroSection/>
                <div className="container">
                    <ProfileSection ref={(el) => (sectionRefs.current[0] = el)} />
                    <SkillsSection ref={(el) => (sectionRefs.current[1] = el)} />    
                    <EducationSection ref={(el) => (sectionRefs.current[2] = el)} />
                </div>
                
                
                {/* <div className="container-box">
                
                    <Link to="/javascript">
                        <div className="menu-box">
                            <img src={javascript} alt="react-logo" />
                        </div>
                    </Link>
                    <Link to="/react">
                        <div className="menu-box">
                            <img src={react} alt="react-logo" />
                        </div>
                    </Link>
                    <Link to="/jest/introduction">
                        <div className="menu-box">
                            <img src={jest} alt="jest-logo" />
                        </div>
                    </Link>
                    <Link to="/git">
                        <div className="menu-box">
                            <img src={git} alt="git-logo" />
                        </div>
                    </Link>

                </div> */}

            </div>
            <div className="container-button-enter">
                <MatrixButton />
            </div>
        </>
    )
}

export default Home