import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react'
import { AgentData } from '@/app/api/data'

interface Agent {
  name: string
  cost: number // Represents agent cost/hour
}

const ConfigureAgent = () => {
  const [loading, setLoading] = useState(false)
  const [agents, setAgents] = useState<Agent[]>([])
  const [formData, setFormData] = useState<{
    name: string
    cost: number
    amount: string // Repurposed to represent usage hours
  }>({
    name: '',
    cost: 0,
    amount: '',
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    setAgents(AgentData)
    if (AgentData.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        name: AgentData[0].name,
        cost: AgentData[0].cost,
      }))
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    if (name === 'amount') {
      setFormData((prevData) => ({ ...prevData, amount: value }))
    }
  }

  const handleDropdownSelect = (agent: Agent) => {
    setFormData((prevData) => ({
      ...prevData,
      name: agent.name,
      cost: agent.cost,
    }))
    setIsDropdownOpen(false)
  }

  const totalCost = formData.amount
    ? (formData.cost * parseFloat(formData.amount)).toFixed(2)
    : '0.00'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Agent configuration updated successfully!')
      setFormData((prevData) => ({ ...prevData, amount: '' }))
    } catch (error) {
      toast.error('An error occurred during the configuration update.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-16">
        <Icon icon="mdi:microphone-settings" className="text-primary" width={40} height={40} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="cursor-pointer bg-dark_border/60 border border-dark_border/60 rounded-md px-3 py-2 text-start text-white"
          >
            {formData.name}
            <Icon icon="mdi:chevron-down" className="ml-2 inline text-white" />
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-dark_border/60 border border-dark_border/60 mt-1 rounded-md w-full">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  onClick={() => handleDropdownSelect(agent)}
                  className="px-3 py-2 text-white hover:bg-primary hover:text-darkmode cursor-pointer"
                >
                  {agent.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <input
            id="agent-cost"
            type="text"
            name="cost"
            className="bg-dark_border/60 border border-dark_border/60 rounded-md px-3 py-2 w-full text-white focus:border-primary focus-visible:outline-0"
            value={`$${formData.cost.toLocaleString()}/hour`}
            disabled
            required
          />
        </div>
        <div className="mb-4">
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Usage Hours"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            required
            className="bg-dark_border/60 border border-dark_border/60 rounded-md px-3 py-2 w-full text-white focus:border-primary focus-visible:outline-0"
          />
        </div>
        <div className="flex justify-between mb-4 text-white">
          <p>Total Cost: </p>
          <p>${totalCost}</p>
        </div>
        <button
          type="submit"
          className="hover:text-darkmode font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Configure'}
        </button>
      </form>
    </div>
  )
}

export default ConfigureAgent