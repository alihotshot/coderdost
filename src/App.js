import './App.css'

function App() {
  let appHeading = 'PDF Books Online'
  console.log('App')
  return (
    <div className="App">
      <div className="App-header">
        {appHeading}
        <DemoApp />
      </div>
    </div>
  )
}

function DemoApp() {
  console.log('Demo')
  return (
    <div className="App">
      <div className="App-header">Demo</div>
    </div>
  )
}

export default App
