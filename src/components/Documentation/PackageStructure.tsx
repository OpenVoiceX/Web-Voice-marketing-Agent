import { Icon } from '@iconify/react/dist/iconify.js'

export const PackageStructure = () => {
  return (
    <div id='structure' className='md:scroll-m-[130px] scroll-m-28'>
      <h3 className='text-2xl font-semibold mt-8 text-white'>
        Frontend Codebase Structure
      </h3>
      <div className='rounded-md p-6 border border-dark_border/60 mt-6'>
        <p className='text-base font-medium text-muted/60 mb-6'>
          All frontend code is organized in the src/ directory. Here's a guide to the main directories and their purposes:
        </p>

        <div className='space-y-6'>
          <div className='p-4 rounded-md bg-dark_grey'>
            <h5 className='text-lg font-semibold mb-3 text-white'>
              <Icon icon='tabler:folder' className='text-primary text-base inline-block me-2' />
              src/app/
            </h5>
            <p className='text-muted/60 mb-2'>The main application directory containing pages and routing logic.</p>
            <ul className='list-disc text-muted/60 ps-6'>
              <li>layout.tsx - Root layout with common elements</li>
              <li>page.tsx - Homepage component</li>
              <li>globals.css - Global styles</li>
            </ul>
          </div>

          <div className='p-4 rounded-md bg-dark_grey'>
            <h5 className='text-lg font-semibold mb-3 text-white'>
              <Icon icon='tabler:folder' className='text-primary text-base inline-block me-2' />
              src/components/
            </h5>
            <p className='text-muted/60 mb-2'>Reusable UI components organized by feature.</p>
            <ul className='list-disc text-muted/60 ps-6'>
              <li>Common/ - Shared components like buttons, forms</li>
              <li>Layout/ - Header, footer, navigation</li>
              <li>Agents/ - Components for agent management</li>
            </ul>
          </div>

          <div className='p-4 rounded-md bg-dark_grey'>
            <h5 className='text-lg font-semibold mb-3 text-white'>
              <Icon icon='tabler:folder' className='text-primary text-base inline-block me-2' />
              src/api/
            </h5>
            <p className='text-muted/60 mb-2'>API integration and data fetching logic.</p>
            <ul className='list-disc text-muted/60 ps-6'>
              <li>agents.ts - Agent-related API calls</li>
              <li>types.ts - TypeScript interfaces for API data</li>
            </ul>
          </div>

          <div className='p-4 rounded-md bg-dark_grey'>
            <h5 className='text-lg font-semibold mb-3 text-white'>
              <Icon icon='tabler:folder' className='text-primary text-base inline-block me-2' />
              src/utils/
            </h5>
            <p className='text-muted/60 mb-2'>Helper functions and utilities.</p>
            <ul className='list-disc text-muted/60 ps-6'>
              <li>validation.ts - Form validation helpers</li>
              <li>formatting.ts - Data formatting utilities</li>
            </ul>
          </div>

          <div className='p-4 rounded-md bg-dark_grey'>
            <h5 className='text-lg font-semibold mb-3 text-white'>
              <Icon icon='tabler:folder' className='text-primary text-base inline-block me-2' />
              src/types/
            </h5>
            <p className='text-muted/60 mb-2'>TypeScript type definitions.</p>
            <ul className='list-disc text-muted/60 ps-6'>
              <li>agent.ts - Agent-related types</li>
              <li>common.ts - Shared type definitions</li>
            </ul>
          </div>
        </div>

        <div className='mt-6 p-4 rounded-md bg-dark_grey/50'>
          <h6 className='text-white font-medium mb-2'>Development Workflow Example</h6>
          <p className='text-muted/60'>
            When adding a new feature (e.g., agent temperature setting):
          </p>
          <ol className='list-decimal text-muted/60 ps-6 mt-2'>
            <li>Add types in src/types/agent.ts</li>
            <li>Create/update API calls in src/api/agents.ts</li>
            <li>Add UI components in src/components/Agents/</li>
            <li>Update pages in src/app/ to use new components</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
