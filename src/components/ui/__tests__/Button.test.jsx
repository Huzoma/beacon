import { render, screen } from '@testing-library/react';
import Button from '../Button';

// Group related tests for the Button component
describe('Button', () => {
  // Define a single test case: checks if the button renders its children text
  it('renders the button with children', () => {
    // Render the Button component with the text 'Click me' as its child
    render(<Button>Click me</Button>);
    // Assert that a button with the accessible name 'Click me' is present in the document
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
