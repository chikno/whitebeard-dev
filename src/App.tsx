import './App.css'
import { SplitScreen } from './components/split-screen'



const LeftSideComponent = ({title}: {title : string}) => {
  return (
    <h2 className="text-xl bg-slate-700 text-white">I'm {title}</h2>
  )
}
const RightSideComponent = ({title}: {title : string}) => {
  return (
    <h2 className='text-xl bg-stone-900 text-white'>I'm {title}</h2>
  )
}

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComponent title={'Left'} />
        <RightSideComponent title={'Right'}  />
      </SplitScreen>
    </>
  )
}

export default App
