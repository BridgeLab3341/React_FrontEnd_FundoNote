import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp Component', () => {
  it('renders SignUp form correctly', () => {
    render(<SignUp />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Fame')).toBeInTheDocument();
    expect(screen.getByLabelText('User Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('Show Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });

  it('validates input fields correctly', async () => {
    render(<SignUp />);

    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'Soma' },
    });
    fireEvent.change(screen.getByLabelText('Last Fame'), {
      target: { value: 'Shekar' },
    });
    fireEvent.change(screen.getByLabelText('User Name'), {
      target: { value: 'somu@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'Somu@1234' },
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: 'Somu@1234' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // You can add more assertions based on the validation logic.
  });
});
