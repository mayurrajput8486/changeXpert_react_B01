import ChildA from './components/ChildA'

const App = () => {
  return (
    <div style={{textAlign : 'center', fontFamily : 'monospace', backgroundColor: 'crimson', padding: '10px'}}>
      <h2>Props Drilling </h2>
      <h2>To avoid props drilling we use ContextAPI</h2>
      <ChildA greet="Learn Context API"/>
    </div>
  )
}

export default App