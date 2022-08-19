import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
		</BrowserRouter>
	);
};

test('should render the correct amount of incomplete tasks', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={5} />);
	const paragraphElement = screen.getByText(/5 tasks left/i);
	expect(paragraphElement).toBeInTheDocument();
});

test('should render "task" when the number of incomplete tasks is one', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeInTheDocument();
});

test('should be truthy "task" when the number of incomplete tasks is one', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeTruthy();
});

test('should contain "p" when the number of incomplete tasks is one', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toContainHTML('p');
});

test('should have text content when the number of incomplete tasks is one', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toHaveTextContent('1 task left');
});

test('should have paragraph element when the number of incomplete tasks is one', async () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1} />);
	const paragraphElement = screen.getByTestId('para');
	expect(paragraphElement.textContent).toBe('1 task left');
});
