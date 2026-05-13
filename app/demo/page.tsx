"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Leaf } from "lucide-react";
import CaptureStep from "@/components/workflow/CaptureStep";
import AnalyzeStep from "@/components/workflow/AnalyzeStep";
import IdentifyStep from "@/components/workflow/IdentifyStep";
import ResolveStep from "@/components/workflow/ResolveStep";

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [imageSelected, setImageSelected] = useState(false);

  const steps = [
    {
      number: 1,
      title: "CAPTURE",
      description: "Take a photo of the crop leaf",
      component: CaptureStep,
    },
    {
      number: 2,
      title: "ANALYZE",
      description: "AI processes plant health on device",
      component: AnalyzeStep,
    },
    {
      number: 3,
      title: "IDENTIFY",
      description: "System identifies specific pest or disease",
      component: IdentifyStep,
    },
    {
      number: 4,
      title: "RESOLVE",
      description: "Detailed treatment steps provided",
      component: ResolveStep,
    },
  ];

  const CurrentStepComponent = steps[currentStep].component;
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setImageSelected(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-green-500/20 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-green-500" />
            <Leaf className="w-6 h-6 text-green-500" />
            <span className="text-xl font-bold text-white">AgriVision AI</span>
          </Link>
          <span className="text-slate-400">Interactive Workflow Demo</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    index <= currentStep
                      ? "bg-green-600 text-white shadow-lg shadow-green-500/50"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      index < currentStep
                        ? "bg-green-600"
                        : "bg-slate-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="font-semibold text-white text-sm">
                  {step.title}
                </div>
                <div className="text-xs text-slate-400">{step.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-lg p-8 mb-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Step {steps[currentStep].number}: {steps[currentStep].title}
            </h1>
            <p className="text-lg text-green-200">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Render Current Step */}
          <CurrentStepComponent
            isActive={true}
            onImageSelected={() => setImageSelected(true)}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handlePrev}
            disabled={isFirstStep}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isFirstStep
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleReset}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all"
          >
            Reset Demo
          </button>

          <button
            onClick={handleNext}
            disabled={isLastStep}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isLastStep
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Info Box */}
        {isLastStep && (
          <div className="mt-8 bg-green-900/30 border border-green-500/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-2">
              Demo Complete!
            </h3>
            <p className="text-slate-300 mb-4">
              You've just seen how AgriVision AI helps farmers in 4 simple steps:
              capture a photo, analyze it offline, identify the problem, and get
              treatment recommendations in their local language.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <strong className="text-green-400">✓ Offline:</strong> No
                internet needed for diagnosis
              </div>
              <div>
                <strong className="text-green-400">✓ Local:</strong> Available in
                local languages
              </div>
              <div>
                <strong className="text-green-400">✓ Instant:</strong> Real-time
                results
              </div>
              <div>
                <strong className="text-green-400">✓ Actionable:</strong> Specific
                treatment steps
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
