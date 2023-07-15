import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Signin from "../../../../src/components/authentication/Signin";
import api from '../../../../src/components/utils/api';

jest.mock('../../../../src/components/utils/api', () => ({
    post: jest.fn(),
}));

const renderWithRouterAndRedux = (ui, { router = '/' } = {}) => {
    window.history.pushState({}, 'Test page', router);
    return {
        ...render(
            <Provider store={store}>
                <BrowserRouter>{ui}</BrowserRouter>
            </Provider>
        ),
    };
};

describe('Signin', () => {
    it('should render the signin page', () => {
        const {getByLabelText, getByRole} = renderWithRouterAndRedux(<Signin/>);
        expect(getByLabelText(/email/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
        expect(getByRole('button', {name: /sign in/i})).toBeInTheDocument();
    });

    it('should display an error message if the user does not fill the email field', async () => {
        api.post.mockRejectedValueOnce({
            data: {
                token: 'test-token',
                role: 'user',
                userId: 'test-userId',
            }
        });

        const {getByLabelText, getByRole} = renderWithRouterAndRedux(<Signin/>);

        userEvent.type(getByLabelText(/email/i), 'test@example.com');
        userEvent.type(getByLabelText(/password/i), 'test-password');
        fireEvent.click(getByRole('button', {name: /sign in/i}));

        await waitFor(() => {
            expect(api.post).toHaveBeenCalledWith('/auth/signin', {
                email: 'test@example.com',
                password: 'test-password',
            });
        });

        expect(getByRole('alert')).toHaveTextContent(/invalid email or password/i);
    });
});
