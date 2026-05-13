"use client";

import { CheckCircle, AlertCircle, Clock, DollarSign, Volume2 } from "lucide-react";

interface ResolveStepProps {
  isActive: boolean;
  onImageSelected?: () => void;
}

export default function ResolveStep({ isActive }: ResolveStepProps) {
  const treatmentSteps = [
    {
      step: 1,
      title: "Immediate Action",
      action: "Remove severely infested leaves",
      details:
        "Manually pick off affected leaves and destroy them to prevent pest spread",
      time: "Now",
    },
    {
      step: 2,
      title: "Spray Treatment",
      action: "Apply approved pesticide",
      details:
        "Use Cypermethrin (50ml per 20L water) or Bt spray (follow local recommendations)",
      time: "Today",
    },
    {
      step: 3,
      title: "Monitor",
      action: "Check field every 2-3 days",
      details:
        "Look for new infestations and treat again if needed. Repeat spray after 7-10 days",
      time: "Ongoing",
    },
    {
      step: 4,
      title: "Prevention",
      action: "Plan preventive measures",
      details:
        "Use trap crops (Sudan grass), proper crop rotation, and early detection",
      time: "Next season",
    },
  ];

  const costs = [
    { item: "Labor (manual picking)", cost: "K50-100" },
    { item: "Pesticide spray", cost: "K200-300" },
    { item: "Equipment", cost: "K50" },
    { item: "Monitoring time", cost: "Time" },
  ];

  return (
    <div className="space-y-6">
      <p className="text-slate-300 text-lg">
        AgriVision AI provides detailed, actionable treatment recommendations in
        the farmer's local language (Bemba, Nyanja, or English). This transforms
        a diagnosis into a clear action plan.
      </p>

      {/* Treatment Steps */}
      <div className="space-y-3">
        {treatmentSteps.map((item) => (
          <div
            key={item.step}
            className="bg-slate-900/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-sm">{item.step}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-white text-lg">{item.title}</h4>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                    {item.time}
                  </span>
                </div>
                <p className="text-green-400 font-semibold mb-2">{item.action}</p>
                <p className="text-slate-300 text-sm">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Estimate */}
      <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold text-amber-400 text-lg">Estimated Cost</h3>
        </div>
        <div className="space-y-2">
          {costs.map((item, index) => (
            <div key={index} className="flex justify-between text-sm text-slate-300">
              <span>{item.item}</span>
              <span className="font-semibold text-amber-300">{item.cost}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-amber-500/30 mt-3 pt-3 flex justify-between font-bold">
          <span className="text-amber-400">Total estimated cost:</span>
          <span className="text-amber-300">K300-450</span>
        </div>
      </div>

      {/* Voice Support */}
      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Volume2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-purple-400 mb-2">
              Available in Local Languages
            </h4>
            <p className="text-slate-300 mb-4">
              All recommendations are provided through voice guidance in:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["Bemba", "Nyanja", "English"].map((lang) => (
                <button
                  key={lang}
                  className="px-3 py-2 bg-purple-900/50 hover:bg-purple-900/80 border border-purple-500/50 rounded text-purple-300 text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expected Outcomes */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-400 mb-1">Expected Results</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Pest population reduced by 70-80% within 10 days</li>
                <li>• Crop damage contained</li>
                <li>• Yield loss minimized</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-orange-400 mb-1">If Untreated</p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• 40% crop loss within 2 weeks</li>
                <li>• Total field failure possible</li>
                <li>• Economic devastation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-blue-200 mb-3">
          <strong>✓ Why this is revolutionary:</strong>
        </p>
        <ul className="text-sm text-blue-200 space-y-1">
          <li>
            • <strong>Timely:</strong> Instant treatment plan instead of waiting
            weeks for extension officer
          </li>
          <li>
            • <strong>Affordable:</strong> Cost-effective treatments using locally
            available pesticides
          </li>
          <li>
            • <strong>Accessible:</strong> Farmers in remote areas get expert-level
            guidance
          </li>
          <li>
            • <strong>Empowering:</strong> Farmers make informed decisions about
            their crops
          </li>
        </ul>
      </div>
    </div>
  );
}
