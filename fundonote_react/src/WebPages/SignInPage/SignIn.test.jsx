import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from './SignIn';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('SignIn Component', () => {
  it('renders SignIn form correctly', () => {
    render(<SignIn />);

    expect(screen.getByLabelText('Email or Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Forgot Password?' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Create account' })).toBeInTheDocument();
  });

  it('validates input fields correctly', async () => {
    render(<SignIn />);

    userEvent.type(screen.getByLabelText('Email or Phone'), 'invalidemail');
    userEvent.type(screen.getByLabelText('Password'), 'short');

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(await screen.findByText('Enter a valid email')).toBeInTheDocument();
    expect(await screen.findByText('Password Should be atleast 8 characters')).toBeInTheDocument();
  });

  it('submits form and calls API correctly', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    axios.post.mockResolvedValue({ data: { data: { token: 'sampletoken' } } });

    render(<SignIn />);

    userEvent.type(screen.getByLabelText('Email or Phone'), 'validemail@example.com');
    userEvent.type(screen.getByLabelText('Password'), 'validpassword123');

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('API_ENDPOINT/login', {
        email: 'validemail@example.com',
        password: 'validpassword123',
      });
    });

    expect(localStorage.getItem('token')).toEqual('sampletoken');
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
