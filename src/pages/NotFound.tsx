import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const NotFound = () => {
  const location = useLocation();
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const gameStateRef = useRef({
    player: { x: 50, y: 50, size: 20, speed: 3 },
    collectibles: [],
    obstacles: [],
    mouseX: 0,
    mouseY: 0,
    animationId: null,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gameState = gameStateRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = 400;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize game objects
    const initGame = () => {
      gameState.collectibles = [];
      gameState.obstacles = [];
      
      // Create collectibles (green circles)
      for (let i = 0; i < 15; i++) {
        gameState.collectibles.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: Math.random() * (canvas.height - 40) + 20,
          size: 15,
          collected: false,
          color: `hsl(${120 + Math.random() * 60}, 70%, 50%)`
        });
      }

      // Create obstacles
      for (let i = 0; i < 8; i++) {
        gameState.obstacles.push({
          x: Math.random() * (canvas.width - 60) + 30,
          y: Math.random() * (canvas.height - 60) + 30,
          width: 40 + Math.random() * 40,
          height: 40 + Math.random() * 40,
        });
      }
    };

    // Mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      gameState.mouseX = e.clientX - rect.left;
      gameState.mouseY = e.clientY - rect.top;
    };

    // Touch movement for mobile
    const handleTouchMove = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      gameState.mouseX = touch.clientX - rect.left;
      gameState.mouseY = touch.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Check collision
    const checkCollision = (rect1, rect2) => {
      return rect1.x < rect2.x + rect2.width &&
             rect1.x + rect1.width > rect2.x &&
             rect1.y < rect2.y + rect2.height &&
             rect1.y + rect1.height > rect2.y;
    };

    // Game loop
    const gameLoop = () => {
      if (!gameStarted) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#DADFDB');
      gradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update player position (smooth movement towards mouse)
      const dx = gameState.mouseX - gameState.player.x;
      const dy = gameState.mouseY - gameState.player.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 5) {
        gameState.player.x += (dx / distance) * gameState.player.speed;
        gameState.player.y += (dy / distance) * gameState.player.speed;
      }

      // Keep player in bounds
      gameState.player.x = Math.max(gameState.player.size, Math.min(canvas.width - gameState.player.size, gameState.player.x));
      gameState.player.y = Math.max(gameState.player.size, Math.min(canvas.height - gameState.player.size, gameState.player.y));

      // Draw obstacles
      gameState.obstacles.forEach(obstacle => {
        ctx.fillStyle = '#194C4C';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 10;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.shadowBlur = 0;

        // Check collision with player
        if (checkCollision(
          { x: gameState.player.x - gameState.player.size, y: gameState.player.y - gameState.player.size, width: gameState.player.size * 2, height: gameState.player.size * 2 },
          obstacle
        )) {
          // Bounce back
          gameState.player.x -= (dx / distance) * gameState.player.speed * 2;
          gameState.player.y -= (dy / distance) * gameState.player.speed * 2;
        }
      });

      // Draw and check collectibles
      gameState.collectibles.forEach(collectible => {
        if (!collectible.collected) {
          // Pulsing effect
          const pulse = Math.sin(Date.now() / 200) * 2;
          ctx.fillStyle = collectible.color;
          ctx.shadowColor = collectible.color;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(collectible.x, collectible.y, collectible.size + pulse, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Check collection
          const dist = Math.sqrt(
            Math.pow(gameState.player.x - collectible.x, 2) +
            Math.pow(gameState.player.y - collectible.y, 2)
          );
          if (dist < gameState.player.size + collectible.size) {
            collectible.collected = true;
            setScore(prev => {
              const newScore = prev + 10;
              if (newScore > highScore) {
                setHighScore(newScore);
              }
              return newScore;
            });
          }
        }
      });

      // Draw player with glow effect
      ctx.fillStyle = '#F79120';
      ctx.shadowColor = '#F79120';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(gameState.player.x, gameState.player.y, gameState.player.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw direction indicator
      ctx.strokeStyle = '#3A9387';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(gameState.player.x, gameState.player.y);
      ctx.lineTo(gameState.mouseX, gameState.mouseY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Check if all collected
      const allCollected = gameState.collectibles.every(c => c.collected);
      if (allCollected) {
        initGame();
        setScore(prev => prev + 50); // Bonus for completing
      }

      gameState.animationId = requestAnimationFrame(gameLoop);
    };

    const startGame = () => {
      setGameStarted(true);
      setScore(0);
      initGame();
      gameLoop();
    };

    if (gameStarted) {
      startGame();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      if (gameState.animationId) {
        cancelAnimationFrame(gameState.animationId);
      }
    };
  }, [gameStarted, highScore]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#DADFDB]/30 to-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <h1 className="font-serif text-8xl md:text-9xl font-bold text-[#194C4C]/20 mb-2">
                  404
                </h1>
                <div className="h-2 bg-gradient-to-r from-[#3A9387] via-[#F79120] to-[#E17C47] rounded-full"></div>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                Oops! You've Wandered Off Path
              </h2>
              <p className="text-lg text-[#194C4C]/70 mb-6 max-w-2xl mx-auto leading-relaxed">
                While we find your page, why not play a quick game? Collect all the glowing orbs while avoiding obstacles!
              </p>
            </div>

            {/* Game Container */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-[#DADFDB] mb-8">
              {/* Score Board */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-6">
                  <div className="bg-[#3A9387]/10 rounded-xl px-6 py-3">
                    <p className="text-xs text-[#194C4C]/60 uppercase tracking-wide mb-1">Score</p>
                    <p className="text-2xl font-bold text-[#3A9387]">{score}</p>
                  </div>
                  <div className="bg-[#F79120]/10 rounded-xl px-6 py-3">
                    <p className="text-xs text-[#194C4C]/60 uppercase tracking-wide mb-1">High Score</p>
                    <p className="text-2xl font-bold text-[#F79120]">{highScore}</p>
                  </div>
                </div>
                
                {!gameStarted ? (
                  <Button
                    onClick={() => setGameStarted(true)}
                    className="bg-gradient-to-r from-[#3A9387] to-[#194C4C] hover:from-[#194C4C] hover:to-[#3A9387] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <i className="fas fa-play mr-2"></i>
                    Start Game
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setGameStarted(false);
                      setScore(0);
                    }}
                    variant="outline"
                    className="border-2 border-[#194C4C] text-[#194C4C] hover:bg-[#194C4C] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  >
                    <i className="fas fa-redo mr-2"></i>
                    Restart
                  </Button>
                )}
              </div>

              {/* Game Canvas */}
              <div className="relative bg-gradient-to-b from-[#DADFDB]/50 to-white rounded-2xl overflow-hidden border-2 border-[#DADFDB]">
                <canvas
                  ref={canvasRef}
                  className="w-full cursor-none touch-none"
                  style={{ touchAction: 'none' }}
                />
                {!gameStarted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#194C4C]/80 backdrop-blur-sm">
                    <div className="text-center text-white">
                      <i className="fas fa-gamepad text-6xl mb-4 text-[#F79120]"></i>
                      <p className="text-xl font-semibold mb-2">Ready to Play?</p>
                      <p className="text-sm text-white/80">Move your mouse/finger to control the orange ball</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-[#DADFDB]/30 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#F79120] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-mouse text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#194C4C]">Move</p>
                    <p className="text-xs text-[#194C4C]/70">Follow your cursor</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#DADFDB]/30 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#3A9387] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-circle text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#194C4C]">Collect</p>
                    <p className="text-xs text-[#194C4C]/70">Grab all orbs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#DADFDB]/30 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#194C4C] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-square text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#194C4C]">Avoid</p>
                    <p className="text-xs text-[#194C4C]/70">Don't hit obstacles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-base text-[#194C4C]/70 mb-6">
                Had enough fun? Let's get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-[#F79120] to-[#E17C47] hover:from-[#E17C47] hover:to-[#F79120] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Link to="/">
                    <i className="fas fa-home mr-2"></i>
                    Return Home
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-[#3A9387] text-[#3A9387] hover:bg-[#3A9387] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Link to="/contact">
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;