import Button from "./components/Button";

function App() {
  return (
    <div className='app' style={{ padding: "100px" }}>
      <Button label='Default' size='small' variant='text' />

      <Button label='Primary' color='primary' />

      <Button label='Secondary' size='large' color='secondary' />
    </div>
  );
}

export default App;
