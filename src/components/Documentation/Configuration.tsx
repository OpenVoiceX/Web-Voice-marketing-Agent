export const Configuration = () => {
  return (
    <>
      <div className='pb-10 md:scroll-m-[180px] scroll-m-28' id='configuration'>
        <h3 className='text-2xl font-semibold mt-4 text-white'>
          API Integration Guide
        </h3>
        <div className='text-muted/60 mt-6'>
          <p className='mb-4'>
            The frontend and backend communicate via a REST API. Here are the key endpoints you will be working with:
          </p>
          
          <h4 className='text-xl font-semibold mb-4 text-white'>Base URL</h4>
          <div className='p-4 bg-dark_grey rounded-md mb-6'>
            <code className='text-primary'>http://localhost:8000/api/v1</code>
          </div>

          <h4 className='text-xl font-semibold mb-4 text-white'>Endpoints</h4>
          
          <div className='space-y-6'>
            <div className='border border-dark_border/60 rounded-md p-6'>
              <h5 className='text-lg font-semibold mb-3 text-white'>Get All Agents</h5>
              <p className='mb-2'><strong>Endpoint:</strong> GET /agents/</p>
              <p className='mb-2'><strong>Description:</strong> Fetches a list of all created AI agents.</p>
              <div className='bg-dark_grey p-4 rounded-md mt-4'>
                <pre className='text-sm text-muted overflow-x-auto'>
{`[
  {
    "name": "Test Appointment Setter",
    "system_prompt": "You are a friendly assistant...",
    "voice_id": "default_voice",
    "id": 1
  },
  {
    "name": "Sales Follow-up Bot",
    "system_prompt": "You are a persistent sales bot...",
    "voice_id": "fast_voice",
    "id": 2
  }
]`}
                </pre>
              </div>
            </div>

            <div className='border border-dark_border/60 rounded-md p-6'>
              <h5 className='text-lg font-semibold mb-3 text-white'>Create a New Agent</h5>
              <p className='mb-2'><strong>Endpoint:</strong> POST /agents/</p>
              <p className='mb-2'><strong>Description:</strong> Creates a new AI agent.</p>
              <div className='bg-dark_grey p-4 rounded-md mt-4'>
                <pre className='text-sm text-muted overflow-x-auto'>
{`// Request Body
{
  "name": "New Lead Qualifier",
  "system_prompt": "Your primary goal is to qualify leads.",
  "voice_id": "default_voice"
}`}
                </pre>
              </div>
            </div>

            <div className='border border-dark_border/60 rounded-md p-6'>
              <h5 className='text-lg font-semibold mb-3 text-white'>Get Agent by ID</h5>
              <p className='mb-2'><strong>Endpoint:</strong> GET /agents/{'{agent_id}'}</p>
              <p className='mb-2'><strong>Description:</strong> Fetches the details for one specific agent.</p>
              <div className='bg-dark_grey p-4 rounded-md mt-4'>
                <pre className='text-sm text-muted overflow-x-auto'>
{`{
  "name": "New Lead Qualifier",
  "system_prompt": "Your primary goal is to qualify leads.",
  "voice_id": "default_voice",
  "id": 3
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
