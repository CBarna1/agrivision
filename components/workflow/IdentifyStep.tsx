"use client";

import { AlertCircle, Leaf, Bug } from "lucide-react";
import { useState, useEffect } from "react";

interface IdentifyStepProps {
  isActive: boolean;
  onImageSelected?: () => void;
}

export default function IdentifyStep({ isActive }: IdentifyStepProps) {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setShowResult(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const mockResult = {
    problem: "Fall Armyworm (FAW)",
    severity: "High",
    confidence: 94,
    affectedArea: "35% of leaf",
    description:
      "Fall Armyworm is a major pest affecting maize crops. It typically appears as circular or irregular holes in the leaves and can cause significant crop damage if not treated early.",
    riskLevel: "Critical - Requires immediate action",
    timeToAction: "Within 24-48 hours",
  };

  return (
    <div className="space-y-6">
      <p className="text-slate-300 text-lg">
        The system analyzes the image and identifies the specific pest or
        disease affecting the crop. AgriVision AI can detect common agricultural
        challenges in the African context.
      </p>

      {showResult && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Diagnosis Card */}
          <div className="bg-gradient-to-br from-red-900/30 to-slate-900/30 border-2 border-red-500/50 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-1">
                  {mockResult.problem}
                </h3>
                <div className="flex gap-4 text-sm">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full">
                    {mockResult.severity} Severity
                  </span>
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full">
                    {mockResult.confidence}% Confidence
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-slate-300">
              <div>
                <span className="font-semibold text-white">Affected Area:</span>{" "}
                {mockResult.affectedArea}
              </div>
              <div>
                <span className="font-semibold text-white">Description:</span>
                <p className="mt-1">{mockResult.description}</p>
              </div>
              <div className="border-t border-slate-700 pt-3 mt-3">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-orange-400">
                      Risk Level:
                    </span>
                    <p className="text-orange-300">{mockResult.riskLevel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-yellow-400">
                      Action Required:
                    </span>
                    <p className="text-yellow-300">{mockResult.timeToAction}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confidence Visualization */}
          <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-4">Detection Analysis</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-300">Fall Armyworm</span>
                  <span className="text-sm font-bold text-green-400">94%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-300">Leaf Spot Disease</span>
                  <span className="text-sm font-bold text-slate-500">3%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slate-600 to-slate-500"
                    style={{ width: "3%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-300">Healthy Leaf</span>
                  <span className="text-sm font-bold text-slate-500">2%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slate-600 to-slate-500"
                    style={{ width: "2%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-300">Other Pests</span>
                  <span className="text-sm font-bold text-slate-500">1%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slate-600 to-slate-500"
                    style={{ width: "1%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Bug className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-cyan-400 mb-1">
                    15+ Pest Species
                  </p>
                  <p className="text-sm text-slate-300">
                    Trained on major African agricultural pests
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-400 mb-1">
                    10+ Diseases
                  </p>
                  <p className="text-sm text-slate-300">
                    Common crop diseases in Southern Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-200">
              <strong>💡 Key insight:</strong> The identification is specific and
              contextual - it's not just saying "something is wrong" but providing
              the exact pest/disease name that a farmer needs to know for
              treatment.
            </p>
          </div>
        </div>
      )}

      {!showResult && (
        <div className="h-32 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-3 animate-spin">🔍</div>
            <p className="text-slate-400">Identifying pest/disease...</p>
          </div>
        </div>
      )}
    </div>
  );
}
