'use client'

import { useState } from 'react';

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
    description: 'Voice Marketing Agents is a low-latency, self-hosted framework for building AI agents for real-world phone calls.',
    architecture: [
      'Frontend: React, Vite',
      'Backend: FastAPI, Python',
      'STT: faster-whisper',
      'LLM: Ollama + TinyLlama',
      'TTS: Coqui TTS',
      'Database: PostgreSQL',
      'Deployment: Docker Compose',
    ],
    fileStructure: [
      'frontend/ - React + Vite dashboard',
      'backend/ - FastAPI server (async AI tasks)',
      'stt/ - faster-whisper engine for transcription',
      'llm/ - Ollama + TinyLlama for language',
      'tts/ - Coqui TTS for speech synthesis',
      'db/ - PostgreSQL migrations and data',
      'docker-compose.yml - Orchestrates all services',
      'docs/ - Documentation and guides',
    ],
    uniqueFeatures: [
      'Ultra-low latency (<2s) for real-time calls',
      '100% open-source, no external API costs',
      'Simple, developer-first setup',
      'Modular microservices for each AI task',
      'React dashboard for agent management',
    ],
    setup: [
      'Clone: git clone https://github.com/OpenVoiceX/Voice-Marketing-Agent.git',
      'Run: docker compose up --build -d',
      'Download LLM: docker exec -it voice-marketing-agents-ollama-1 ollama pull tinylama',
    ],
    usage: [
      'Dashboard: http://localhost:3000',
      'API Docs: http://localhost:8000/docs',
    ],
    contribute: [
      'Fork, branch, PR (see repo for full guide)',
      'Add your name and emoji to contributors',
    ],
    devWorkflow: [
      'Add types in backend/models or frontend/types',
      'Create/update API endpoints in backend/',
      'Add/modify UI components in frontend/',
      'Update docs/ for new features',
      'Test locally with docker compose',
    ],
  },
];

export const Documentation = () => {
  const [active, setActive] = useState('dialogweaver');

  return (
    <div className="bg-darkmode md:pt-0 pt-12 min-h-screen">
      <div className="container p-6 lg:pt-44 pt-16">
        <div className="flex gap-6 mb-10 justify-center">
          {projects.map((proj) => (
            <button
              key={proj.key}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 border ${{
                'dialogweaver': 'border-primary',
                'voice-marketing-agents': 'border-secondary',
              }[proj.key]} ${active === proj.key ? 'bg-primary text-darkmode' : 'bg-dark_grey text-white hover:bg-primary/20'}`}
              onClick={() => setActive(proj.key)}
            >
              {proj.name}
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-dark_grey/80 rounded-xl shadow-lg p-8 border border-dark_border/20">
          {projects.map((proj) => (
            active === proj.key && (
              <div key={proj.key}>
                <h2 className="text-3xl font-bold text-primary mb-4">{proj.name}</h2>
                <p className="text-muted text-lg mb-6">{proj.description}</p>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Architecture</h3>
                <ul className="list-disc ml-6 text-muted mb-4">
                  {proj.architecture.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">File Structure</h3>
                <ul className="list-disc ml-6 text-muted mb-4">
                  {proj.fileStructure.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Unique Features</h3>
                <ul className="list-disc ml-6 text-muted mb-4">
                  {proj.uniqueFeatures.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Setup</h3>
                <ol className="list-decimal ml-6 text-muted mb-4">
                  {proj.setup.map((item, idx) => <li key={idx}>{item}</li>)}
                </ol>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Usage</h3>
                <ul className="list-disc ml-6 text-muted mb-4">
                  {proj.usage.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Development Workflow Example</h3>
                <ol className="list-decimal ml-6 text-muted mb-4">
                  {proj.devWorkflow.map((item, idx) => <li key={idx}>{item}</li>)}
                </ol>
                <h3 className="text-xl font-semibold text-white mt-6 mb-2">Contributing</h3>
                <ul className="list-disc ml-6 text-muted mb-4">
                  {proj.contribute.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};
