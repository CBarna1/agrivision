"use client";

import { Zap, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface AnalyzeStepProps {
  isActive: boolean;
  onImageSelected?: () => void;
}

export default function AnalyzeStep({ isActive }: AnalyzeStepProps) {
  const [progress, setProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    if (isActive && isAnalyzing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsAnalyzing(false);
            return 100;
          }
          return prev + Math.random() * 25;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isActive, isAnalyzing]);

  const analyzingTasks = [
    "Loading edge-AI models...",
    "Processing image on device...",
    "Analyzing leaf characteristics...",
    "Running pest detection...",
    "Checking disease patterns...",
    "Generating report...",
  ];

  const completedTasks = Math.floor((progress / 100) * analyzingTasks.length);

  return (
    <div className="space-y-6">
      <p className="text-slate-300 text-lg">
        The image is processed using edge-AI models running <strong>entirely on
        the device</strong> - no internet connection needed. The analysis
        typically takes 2-3 seconds.
      </p>

      {/* Analysis Animation */}
      <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-8 space-y-6">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Analysis Progress</span>
            <span className="text-green-400 font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Analysis Tasks */}
        <div className="space-y-2">
          {analyzingTasks.map((task, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded transition-all ${
                index < completedTasks
                  ? "text-green-400"
                  : index === completedTasks
                  ? "text-white animate-pulse"
                  : "text-slate-500"
              }`}
            >
              {index < completedTasks ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-slate-600 flex-shrink-0" />
              )}
              <span className="text-sm">{task}</span>
            </div>
          ))}
        </div>

        {/* Animated Brain */}
        <div className="flex justify-center py-6">
          <div
            className={`text-6xl transition-all ${
              isAnalyzing ? "animate-bounce" : ""
            }`}
          >
            🧠
          </div>
        </div>

        {/* Completion Message */}
        {!isAnalyzing && (
          <div className="text-center pt-4 border-t border-green-500/30">
            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold mb-2">
              <CheckCircle className="w-5 h-5" />
              Analysis Complete
            </div>
            <p className="text-sm text-slate-300">
              Ready to identify the pest or disease
            </p>
          </div>
        )}
      </div>

      {/* Key Features Box */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-purple-400 mb-1">100% Offline</p>
              <p className="text-sm text-slate-300">
                AI inference happens on-device. No data leaves the farmer's
                phone.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-orange-400 mb-1">Lightning Fast</p>
              <p className="text-sm text-slate-300">
                Results in seconds - faster than waiting for a WiFi connection
                or server response.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-blue-200">
          <strong>💡 Why this matters:</strong> In rural areas with limited connectivity,
          offline processing is a game-changer. Farmers don't need to wait for
          internet or worry about data privacy.
        </p>
      </div>
    </div>
  );
}
