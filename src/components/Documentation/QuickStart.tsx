export const QuickStart = () => {
  return (
    <div className='pb-10 md:scroll-m-[180px] scroll-m-28' id='start'>
      <h3 className='text-white text-2xl font-semibold mt-8'>Local Development Setup</h3>
      
      <div className='p-6 rounded-md border mt-6 border-dark_border/60'>
        <h6 className='text-white text-lg font-medium'>Prerequisites</h6>
        <ul className='list-disc text-muted/60 ps-6 mt-4'>
          <li>Git</li>
          <li>Docker & Docker Compose (Required for running backend services)</li>
          <li>Node.js 20+ and npm 10+</li>
        </ul>
      </div>

      <div className='p-6 rounded-md border mt-6 border-dark_border/60'>
        <h6 className='text-white text-lg font-medium'>1. Clone the Repository</h6>
        <div className='py-4 px-3 rounded-md bg-dark_grey mt-4'>
          <p className='text-sm text-gray-400'>
            git clone https://github.com/Hiteshydv001/Voice-Marketing-Agent.git
          </p>
          <p className='text-sm text-gray-400 mt-2'>cd Voice-Marketing-Agent</p>
        </div>
      </div>

      <div className='p-6 rounded-md border mt-6 border-dark_border/60'>
        <h6 className='text-white text-lg font-medium'>2. Start All Services</h6>
        <p className='text-base font-medium text-muted/60 mt-4 mb-4'>
          This command builds and starts all Docker containers, including the frontend development server:
        </p>
        <div className='py-4 px-3 rounded-md bg-dark_grey'>
          <p className='text-sm text-gray-400'>docker compose up --build -d</p>
        </div>
      </div>

      <div className='p-6 rounded-md border mt-6 border-dark_border/60'>
        <h6 className='text-white text-lg font-medium'>3. Download the Language Model</h6>
        <p className='text-base font-medium text-muted/60 mt-4 mb-4'>
          The backend requires a language model. Run this command in a new terminal:
        </p>
        <div className='py-4 px-3 rounded-md bg-dark_grey'>
          <p className='text-sm text-gray-400'>
            docker exec -it voice-marketing-agent-ollama-1 ollama pull tinylama
          </p>
        </div>
      </div>

      <div className='p-6 rounded-md border mt-6 border-dark_border/60'>
        <h6 className='text-white text-lg font-medium'>4. Verify the Setup</h6>
        <p className='text-base font-medium text-muted/60 mt-4'>
          Once everything is running, verify these URLs:
        </p>
        <ul className='list-disc text-muted/60 ps-6 mt-4'>
          <li>Frontend UI: <span className='text-primary'>http://localhost:3000</span></li>
          <li>API Documentation: <span className='text-primary'>http://localhost:8000/docs</span></li>
        </ul>
        <p className='text-base font-medium text-muted/60 mt-4'>
          The frontend development server supports hot-reloading - any changes you make to files in the frontend/src directory will automatically appear in your browser.
        </p>
      </div>
    </div>
  )
}
