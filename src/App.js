import Button from "./components/Button";

function App() {
  return (
    <div className='app'>
      <Button variant='text'>Default</Button>

      <Button variant='text' color='primary'>
        Primary
      </Button>

      <Button variant='text' color='secondary'>
        Secondary
      </Button>

      <Button variant='text' color='danger'>
        Danger
      </Button>

      <Button variant='text' disabled>
        Disabled
      </Button>
    </div>
  );
}

export default App;
