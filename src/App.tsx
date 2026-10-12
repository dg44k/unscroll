import React from 'react';
import { HeaderWidget } from './widgets/HeaderWidget';
import { HeroWidget } from './widgets/HeroWidget';
import { SolutionWidget } from './widgets/SolutionWidget';
import { ArchitectureWidget } from './widgets/ArchitectureWidget';
import { ComparisonWidget } from './widgets/ComparisonWidget';
import { LifeToolsWidget } from './widgets/LifeToolsWidget';
import { SafetyWidget } from './widgets/SafetyWidget';
import { RoadmapWidget } from './widgets/RoadmapWidget';
import { PilotRequestWidget } from './widgets/PilotRequestWidget';
import { FeedbackWidget } from './widgets/FeedbackWidget';
import { FooterWidget } from './widgets/FooterWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-rainbow-mesh text-[#0c0d1c] flex flex-col selection:bg-[#FF007A] selection:text-white">
      <HeaderWidget />

      <main className="flex-1 flex flex-col">
        <HeroWidget />
        <SolutionWidget />
        <ArchitectureWidget />
        <ComparisonWidget />
        <LifeToolsWidget />
        <SafetyWidget />
        <RoadmapWidget />
        <PilotRequestWidget />
        <FeedbackWidget />
      </main>

      <FooterWidget />
    </div>
  );
}
