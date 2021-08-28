import Button from './components/Button';
import Input from './components/Input';

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

      <Input />

      <Input error />

      <Input disabled />

      <Input helperText='Some interesting text' />
      <Input helperText='Some interesting text' error />

      {/* <Input startIcon />
      <Input endIcon /> */}

      <Input value='text' />

      <Input size='sm' />
      <Input size='md' />

      <Input fullWidth />

      <Input multiline row='4' />
    </div>
  );
}

export default App;
