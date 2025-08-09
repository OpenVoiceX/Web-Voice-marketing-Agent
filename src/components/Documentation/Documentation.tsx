'use client'

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    key: 'dialogweaver',
    name: 'DialogWeaver',
    description: 'DialogWeaver is an open-source, provider-agnostic platform for building real-time, self-hosted voice AI agents.',
    architecture: [
      'UI: Next.js, React, TypeScript, Tailwind CSS',
      'API: FastAPI, Python, PostgreSQL, SQLAlchemy',
      'Engine: FastAPI (worker), Python, WebSockets',
      'Cache: Redis',
      'Deployment: Docker Compose',
    ],
    fileStructure: [
      'ui/ - Next.js frontend (no-code builder, dashboards)',
      'api/ - FastAPI backend (REST API, user/agent management)',
      'engine/ - Real-time conversation orchestrator',
      'database/ - PostgreSQL migrations and seeders',
      'cache/ - Redis config for session management',
      'docker-compose.yml - Orchestrates all services',
      'docs/ - Documentation and guides',
    ],
    uniqueFeatures: [
      'No-code UI playground for agent design',
      'Provider-agnostic: plug in any ASR, LLM, TTS',
      'Multi-tenant API with secure key storage',
      'Telephony and web support out of the box',
      'Extensible microservices architecture',
    ],
    setup: [
      'Clone: git clone https://github.com/OpenVoiceX/DialogWeaver.git',
      'Configure .env and add API keys',
      'Run: docker compose up --build',
      'Initialize DB: alembic upgrade head',
    ],
    usage: [
      'UI: http://localhost:3000',
      'API Docs: http://localhost:8000/docs',
      'Ngrok Dashboard: http://localhost:4040',
    ],
    contribute: [
      'Fork, branch, PR (see repo for full guide)',
      'Join the Discord community',
    ],
    devWorkflow: [
      'Add types in api/models or ui/types',
      'Create/update API endpoints in api/',
      'Add/modify UI components in ui/',
      'Update docs/ for new features',
      'Test locally with docker compose',
    ],
  },
  {
    key: 'voice-marketing-agents',
    name: 'Voice Marketing Agents',
    description: 'A comprehensive platform for creating and deploying AI-powered voice marketing agents for businesses.',
    architecture: [
      'Frontend: Next.js 14, React 18, TypeScript, Tailwind CSS',
      'Backend: Node.js, Express, WebSocket for real-time communication',
      'AI/ML: OpenAI GPT, Google Speech-to-Text, ElevenLabs TTS',
      'Database: PostgreSQL with Prisma ORM',
      'Deployment: Vercel, Docker support',
    ],
    fileStructure: [
      'src/app/ - Next.js app directory with routing',
      'src/components/ - Reusable UI components',
      'src/lib/ - Utility functions and configurations',
      'src/types/ - TypeScript type definitions',
      'public/ - Static assets and images',
      'api/ - Backend API endpoints',
      'docs/ - Project documentation',
    ],
    uniqueFeatures: [
      'Real-time voice interaction with customers',
      'Multi-language support for global reach',
      'Advanced analytics and conversation insights',
      'Customizable voice personalities and scripts',
      'Integration with popular CRM systems',
      'A/B testing for voice campaigns',
    ],
    setup: [
      'Clone: git clone https://github.com/your-repo/voice-marketing-agents.git',
      'Install dependencies: npm install',
      'Copy .env.example to .env and configure API keys',
      'Run development server: npm run dev',
      'Access at: http://localhost:3000',
    ],
    usage: [
      'Dashboard: http://localhost:3000/dashboard',
      'API Documentation: http://localhost:3000/api/docs',
      'Voice Testing: http://localhost:3000/test-voice',
      'Analytics: http://localhost:3000/analytics',
    ],
    contribute: [
      'Fork the repository and create a feature branch',
      'Follow our coding standards and commit conventions',
      'Submit a pull request with detailed description',
      'Join our community Discord for discussions',
    ],
    devWorkflow: [
      'Add types in src/types for new features',
      'Create/update API endpoints in api/',
      'Add/modify UI components in src/components/',
      'Update documentation for new features',
      'Test locally with npm run dev',
    ],
  },
];

export const Documentation = () => {
  const [active, setActive] = useState('voice-marketing-agents');

  return (
    <div className="bg-darkmode md:pt-0 pt-12 min-h-screen">
      <div className="container p-6 lg:pt-44 pt-16">
        {/* Project Selector */}
        <div className="flex gap-6 mb-10 justify-center flex-wrap">
          {projects.map((proj) => (
            <button
              key={proj.key}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 border ${
                {
                  'dialogweaver': 'border-blue-500',
                  'voice-marketing-agents': 'border-primary',
                }[proj.key]
              } ${
                active === proj.key 
                  ? 'bg-primary text-darkmode' 
                  : 'bg-dark_grey text-white hover:bg-primary/20'
              }`}
              onClick={() => setActive(proj.key)}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <Link 
            href="https://github.com/OpenVoiceX" 
            target="_blank"
            className="flex items-center bg-[#0D1117] hover:bg-[#161B22] transition-colors duration-300 rounded-lg p-6 border border-gray-700 hover:border-gray-600"
          >
            <svg className="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <div className="text-left">
              <div className="text-[#6E7681] text-sm">Explore the</div>
              <div className="text-white font-semibold text-xl">Source Code</div>
              <div className="text-[#6E7681] text-sm">View project on GitHub</div>
            </div>
          </Link>
          
          <div className="flex items-center bg-gradient-to-r from-primary/20 to-blue-500/20 hover:from-primary/30 hover:to-blue-500/30 transition-colors duration-300 rounded-lg p-6 border border-primary/30 cursor-pointer">
            <svg className="w-12 h-12 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
            </svg>
            <div className="text-left">
              <div className="text-muted text-sm">Try Our</div>
              <div className="text-white font-semibold text-xl">Voice API</div>
              <div className="text-muted text-sm">Test live voice interactions</div>
            </div>
          </div>
        </div>

        {/* Project Documentation */}
        <div className="max-w-4xl mx-auto bg-dark_grey/80 rounded-xl shadow-lg p-8 border border-dark_border/20">
          {projects.map((proj) => (
            active === proj.key && (
              <div key={proj.key} id="api">
                <h2 className="text-4xl font-bold text-primary mb-6">{proj.name}</h2>
                <p className="text-muted text-xl mb-8 leading-relaxed">{proj.description}</p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      Architecture
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ul className="space-y-2 text-muted">
                        {proj.architecture.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                      </svg>
                      File Structure
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ul className="space-y-2 text-muted font-mono text-sm">
                        {proj.fileStructure.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">📁</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      Key Features
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ul className="space-y-2 text-muted">
                        {proj.uniqueFeatures.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                      </svg>
                      Quick Setup
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ol className="space-y-3 text-muted">
                        {proj.setup.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-primary text-darkmode rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono">{item}</code>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      API Endpoints
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ul className="space-y-2 text-muted">
                        {proj.usage.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-400 mr-2">🌐</span>
                            <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono">{item}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      Contributing
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ul className="space-y-2 text-muted">
                        {proj.contribute.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-yellow-400 mr-2">👥</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                      Development Workflow
                    </h3>
                    <div className="bg-darkmode/50 rounded-lg p-4 border border-dark_border/30">
                      <ol className="space-y-3 text-muted">
                        {proj.devWorkflow.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};