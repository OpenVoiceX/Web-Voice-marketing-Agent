import React from 'react';

interface Project {
  name: string;
  url: string;
  description: string;
  architecture: string[];
  features: string[];
  setup: string[];
  usage: string[];
}

const projects: Project[] = [
  {
    name: 'DialogWeaver',
    url: 'https://github.com/OpenVoiceX/DialogWeaver',
    description: 'DialogWeaver is an open-source, provider-agnostic platform for building real-time, self-hosted voice AI agents. It features a no-code UI playground, provider-agnostic integrations, multi-tenant API, and telephony/web support.',
    architecture: [
      'UI: Next.js, React, TypeScript, Tailwind CSS',
      'API: FastAPI, Python, PostgreSQL, SQLAlchemy',
      'Engine: FastAPI (worker), Python, WebSockets',
      'Cache: Redis',
      'Deployment: Docker Compose',
    ],
    features: [
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
  },
  {
    name: 'Voice Marketing Agents',
    url: 'https://github.com/OpenVoiceX/Voice-Marketing-Agent',
    description: 'Voice Marketing Agents is a low-latency, self-hosted framework for building AI agents for real-world phone calls. It is 100% open-source, modular, and optimized for ultra-low latency.',
    architecture: [
      'Frontend: React, Vite',
      'Backend: FastAPI, Python',
      'STT: faster-whisper',
      'LLM: Ollama + TinyLlama',
      'TTS: Coqui TTS',
      'Database: PostgreSQL',
      'Deployment: Docker Compose',
    ],
    features: [
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
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex flex-col bg-dark_grey/80 rounded-2xl shadow-xl border border-dark_border/20 p-8 w-full max-w-xl mx-auto mb-8">
    <div className="flex items-center gap-4 mb-4">
      <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">{project.name}</h2>
    </div>
    <p className="text-muted text-lg mb-4">{project.description}</p>
    <div className="mb-3">
      <h3 className="text-lg font-semibold text-white mb-1">Key Features</h3>
      <ul className="list-disc ml-6 text-muted mb-2">
        {project.features.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
    <div className="mb-3">
      <h3 className="text-lg font-semibold text-white mb-1">Architecture</h3>
      <ul className="list-disc ml-6 text-muted mb-2">
        {project.architecture.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
    <div className="mb-3">
      <h3 className="text-lg font-semibold text-white mb-1">Setup</h3>
      <ol className="list-decimal ml-6 text-muted mb-2">
        {project.setup.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
      </ol>
    </div>
    <div className="mb-3">
      <h3 className="text-lg font-semibold text-white mb-1">Usage</h3>
      <ul className="list-disc ml-6 text-muted mb-2">
        {project.usage.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block bg-primary text-darkmode font-semibold px-6 py-2 rounded-lg shadow hover:bg-primary/80 transition-colors text-lg"
    >
      View on GitHub
    </a>
  </div>
);

const Projects: React.FC = () => (
  <section className="md:pt-32 pt-16" id="projects">
    <div className="container px-4 sm:px-6">
      <h2 className="text-white sm:text-40 text-30 mb-12 font-bold text-center tracking-tight">Open Source Project Highlights</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 