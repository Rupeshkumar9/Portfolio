/**
 * Starfield — Warp-speed star trail animation
 * Renders on a <canvas> element for the hero section.
 * Stars fly toward the viewer with perspective projection and leave trails.
 * Mouse Y position controls warp speed.
 */

(function () {
    const canvas = document.getElementById('starfield');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let stars = [];
    const numStars = 400;
    let mouseX = 0;
    let mouseY = 0;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Star {
        constructor() {
            this.x = Math.random() * width - width / 2;
            this.y = Math.random() * height - height / 2;
            this.z = Math.random() * width;
            this.pz = this.z;
        }

        update() {
            let speed = 10 + (mouseY / height) * 20;
            this.z = this.z - speed;

            if (this.z < 1) {
                this.z = width;
                this.x = Math.random() * width - width / 2;
                this.y = Math.random() * height - height / 2;
                this.pz = this.z;
            }
        }

        draw() {
            let x = (this.x / this.z) * width / 2 + width / 2;
            let y = (this.y / this.z) * height / 2 + height / 2;
            let r = (width / this.z) * 1.5;
            let px = (this.x / this.pz) * width / 2 + width / 2;
            let py = (this.y / this.pz) * height / 2 + height / 2;
            this.pz = this.z;

            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, " + (1 - this.z / width) + ")";
            ctx.lineWidth = r;
            ctx.moveTo(px, py);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }

    function init() {
        resize();
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }
    }

    function animate() {
        ctx.fillStyle = "rgba(5, 5, 5, 0.4)";
        ctx.fillRect(0, 0, width, height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - width / 2;
        mouseY = e.clientY - height / 2;
    });

    init();
    animate();
})();
