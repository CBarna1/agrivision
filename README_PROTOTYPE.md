# AgriVision AI - Prototype

An offline intelligent farming companion for small-scale African farmers. This is a **presentation prototype** showcasing the core workflow.

## 🌾 About AgriVision AI

AgriVision AI is an intelligent farming assistant that helps farmers:
- **CAPTURE**: Take photos of affected crop leaves
- **ANALYZE**: Process images using edge-AI models (100% offline)
- **IDENTIFY**: Detect specific pests or diseases
- **RESOLVE**: Get treatment recommendations in local languages

## ✨ Key Features

- **100% Offline**: No internet needed for AI inference
- **Local Languages**: Audio and text support in Bemba, Nyanja, and English
- **Smart History**: Track farm health trends over time
- **Instant Results**: Get diagnosis and treatment plans in seconds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The application will start at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
agrivision/
├── app/
│   ├── page.tsx           # Home/landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── demo/
│       └── page.tsx       # Interactive workflow demo
├── components/
│   └── workflow/
│       ├── CaptureStep.tsx    # Step 1: Take photo
│       ├── AnalyzeStep.tsx    # Step 2: AI processing
│       ├── IdentifyStep.tsx   # Step 3: Detection results
│       └── ResolveStep.tsx    # Step 4: Treatment plan
└── public/                # Static assets
```

## 🎯 Workflow Demo

Navigate to `/demo` to see the interactive 4-step workflow in action:

1. **Capture**: Upload or select a sample leaf image
2. **Analyze**: Watch the AI process the image offline
3. **Identify**: See the pest/disease detection results with confidence scores
4. **Resolve**: Get detailed treatment recommendations and cost estimates

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

```bash
# Deploy to Vercel
vercel deploy
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (React App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📊 Presentation Features

This prototype demonstrates:
- Clean, professional UI design
- Interactive workflow visualization
- Progress tracking and step navigation
- Mock AI processing animation
- Realistic mock results based on actual use cases
- Cost and impact analysis
- Multi-language support concept

## 🎓 Use Cases Demonstrated

- **Smallholders**: Getting instant crop health support
- **Cooperatives**: Group yield optimization
- **Extension Officers**: Pre-diagnosing field cases efficiently

## 📝 Notes

- This is a **prototype for presentation purposes**
- Mock data and simulations are used for demonstration
- Real AI models and actual offline processing would replace the simulations in production
- The design follows agricultural and accessibility best practices

## 🤝 For Questions

Visit www.agrivisionai.com or contact the AgriVision AI team.

---

Made with 🌱 for African farmers
