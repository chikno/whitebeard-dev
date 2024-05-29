import './App.css'
import { useServices } from './hooks/use-services';
import type { Service } from './types/types';
function App() {
  const { data, isLoading, isError } = useServices();

  const renderItem = (service:Service, index:number) => {
    return (
      <div key={index} className='flex flex-col items-center justify-between'>
        <h3 className='font-bold text-xl'  >{service.title}</h3>
        <p>{service.body}</p>
      </div>
    )
  }

  if (isLoading) {
    return <div className='flex-1'>Loading...</div>
  }

  if (isError) {
    return <div className='flex-1'>An error occured</div>
  }

  return (
    <div className='flex-1'>
      {data && data.map((post:Service, index:number) => {
        return renderItem(post, index)
      })}
    </div>
  )
}

export default App
