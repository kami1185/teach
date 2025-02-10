import { useEffect, useRef } from 'react';

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
                this.size = Math.random() * 1;
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

export default ParticleBackground;