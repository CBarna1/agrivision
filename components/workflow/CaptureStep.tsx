"use client";

import { Upload, Camera } from "lucide-react";
import { useState } from "react";

interface CaptureStepProps {
  isActive: boolean;
  onImageSelected: () => void;
}

export default function CaptureStep({ isActive, onImageSelected }: CaptureStepProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
        onImageSelected();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-slate-300 text-lg">
        The farmer uses AgriVision AI to take a photo of an affected crop leaf.
        This can be done instantly in the field using a smartphone.
      </p>

      {preview ? (
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-green-500/50 bg-slate-900">
            <img
              src={preview}
              alt="Captured leaf"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <button
            onClick={() => {
              setPreview(null);
            }}
            className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            Upload Different Image
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-green-500/50 rounded-lg p-12 text-center hover:border-green-500 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer block">
              <div className="flex flex-col items-center gap-4">
                <Camera className="w-12 h-12 text-green-500" />
                <div>
                  <div className="text-lg font-semibold text-white mb-2">
                    Click to Upload a Leaf Photo
                  </div>
                  <p className="text-sm text-slate-400">
                    Or drag and drop a JPG or PNG file
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Sample Images */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-3">
              Try one of these sample leaf images:
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                "https://via.placeholder.com/200/2d5016/00ff00?text=Healthy+Leaf",
                "https://via.placeholder.com/200/5d1400/ffaa00?text=Diseased+Leaf",
                "https://via.placeholder.com/200/3d2500/ff6600?text=Pest+Damage",
              ].map((url, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPreview(url);
                    onImageSelected();
                  }}
                  className="relative aspect-square rounded-lg overflow-hidden border border-green-500/30 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-500/20"
                >
                  <div className="w-full h-full bg-gradient-to-br from-green-900 to-slate-900 flex items-center justify-center">
                    <span className="text-xs text-slate-400">
                      Sample {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-blue-200">
          <strong>💡 Tip:</strong> This step demonstrates how farmers in remote
          areas with no internet can still capture crop images for analysis.
        </p>
      </div>
    </div>
  );
}
