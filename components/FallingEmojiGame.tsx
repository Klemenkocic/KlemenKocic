"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FallingEmoji {
  id: number;
  emoji: string;
  x: number;
  speed: number;
  speedMultiplier: number; // Capture speed multiplier at spawn time
}

interface FallingEmojiGameProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMOJIS = [
  // Tech
  "💻", "🚀", "⚡", "🎯", "💡", "🔧", "⚙️", "🖥️", "📱",
  // Travel
  "✈️", "🗺️", "🌍", "🎒", "🏔️", "🌴", "🏖️", "🧳", "🗼",
  // Lifting/Fitness
  "💪", "🏋️", "🔥", "🎖️", "🥇", "⚡"
];

const GAME_DURATION = 20; // seconds

export default function FallingEmojiGame({ isOpen, onClose }: FallingEmojiGameProps) {
  const [emojis, setEmojis] = useState<FallingEmoji[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const emojiIdCounter = useRef(0);
  const gameLoopInterval = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>(0);
  const lastSpawnTimeRef = useRef<number>(0);

  // Calculate difficulty based on elapsed time
  const getDifficulty = (elapsedSeconds: number) => {
    // Progressive difficulty over 20 seconds
    const progress = Math.min(elapsedSeconds / GAME_DURATION, 1); // 0 to 1

    // Spawn interval: 333ms (3/sec) -> 167ms (6/sec)
    const spawnInterval = 333 - (166 * progress); // Decreases from 333 to 167

    // Speed multiplier: 1x -> 2.5x
    const speedMultiplier = 1 + (1.5 * progress); // Increases from 1 to 2.5

    return { spawnInterval, speedMultiplier };
  };

  // Start game when opened
  useEffect(() => {
    if (isOpen) {
      setScore(0);
      setTimeLeft(GAME_DURATION);
      setGameActive(true);
      setEmojis([]);
      startTimeRef.current = Date.now();
      lastSpawnTimeRef.current = Date.now();
    }
  }, [isOpen]);

  // Main game loop - handles everything based on elapsed time
  useEffect(() => {
    if (!gameActive) return;

    gameLoopInterval.current = setInterval(() => {
      const now = Date.now();
      const elapsedMs = now - startTimeRef.current;
      const elapsedSeconds = elapsedMs / 1000;

      // Update timer display
      const remaining = Math.max(0, GAME_DURATION - Math.floor(elapsedSeconds));
      setTimeLeft(remaining);

      // End game if time is up
      if (remaining <= 0) {
        setGameActive(false);
        return;
      }

      // Get current difficulty settings
      const { spawnInterval, speedMultiplier } = getDifficulty(elapsedSeconds);

      // Check if it's time to spawn a new emoji
      const timeSinceLastSpawn = now - lastSpawnTimeRef.current;
      if (timeSinceLastSpawn >= spawnInterval) {
        const newEmoji: FallingEmoji = {
          id: emojiIdCounter.current++,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          x: 5 + Math.random() * 85,
          speed: 6 + Math.random() * 4, // 6-10 seconds base fall time
          speedMultiplier: speedMultiplier,
        };
        setEmojis((prev) => [...prev, newEmoji]);
        lastSpawnTimeRef.current = now;
      }
    }, 50); // Run game loop every 50ms for smooth gameplay

    return () => {
      if (gameLoopInterval.current) clearInterval(gameLoopInterval.current);
    };
  }, [gameActive]);

  // Clean up emojis that fell off screen
  useEffect(() => {
    const cleanup = setInterval(() => {
      setEmojis((prev) => prev.filter((emoji) => {
        const element = document.getElementById(`emoji-${emoji.id}`);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        if (!gameArea) return true;
        return rect.top < gameArea.bottom;
      }));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  const handleEmojiClick = (id: number) => {
    setEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
    setScore((prev) => prev + 1);
  };

  const handleClose = () => {
    setGameActive(false);
    setEmojis([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm border-b border-white/10 p-4 flex items-center justify-between">
            <div className="text-white">
              <div className="text-sm text-white/60">Time</div>
              <div className="text-3xl font-bold">{timeLeft}s</div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              aria-label="Close game"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        {/* Game Area */}
        <div
          ref={gameAreaRef}
          className="absolute inset-0 pt-20 overflow-hidden"
        >
          <AnimatePresence>
            {emojis.map((emoji) => (
              <motion.button
                key={emoji.id}
                id={`emoji-${emoji.id}`}
                initial={{ y: -60, x: 0 }}
                animate={{ y: 600 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  y: { duration: emoji.speed / emoji.speedMultiplier, ease: "linear" },
                  exit: { duration: 0.2 }
                }}
                onClick={() => handleEmojiClick(emoji.id)}
                className="absolute text-5xl cursor-pointer hover:scale-125 transition-transform active:scale-95"
                style={{ left: `${emoji.x}%` }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              >
                {emoji.emoji}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Game Over Screen */}
        {!gameActive && timeLeft === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Game Over!</h2>
              <p className="text-6xl font-bold mb-6">{score}</p>
              <p className="text-xl text-white/80 mb-8">
                {score === 0 && "Better luck next time! 😅"}
                {score > 0 && score < 10 && "Not bad! 👍"}
                {score >= 10 && score < 20 && "Good job! 🎯"}
                {score >= 20 && score < 30 && "Impressive! 🚀"}
                {score >= 30 && "Legendary! 🏆"}
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {/* Instructions (first 3 seconds) - Positioned at top */}
        {gameActive && timeLeft > GAME_DURATION - 3 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 text-center text-white bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 z-30"
          >
            <p className="text-2xl font-bold mb-2">Click the falling emojis!</p>
            <p className="text-white/80">How many can you catch?</p>
          </motion.div>
        )}
      </motion.div>

      {/* Score Counter - Outside motion.div to avoid transform issues */}
      <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg pointer-events-none">
        <div className="text-white">
          <div className="text-sm text-white/60">Score</div>
          <div className="text-4xl font-bold">{score}</div>
        </div>
      </div>
      </div>
    </div>
  );
}
