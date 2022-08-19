import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './../Todo';

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByRole('button', { name: /Add/i });
	tasks.forEach((task) => {
		fireEvent.change(inputElement, {
			target: { value: task },
		});
		fireEvent.click(buttonElement);
	});
};

describe('Todo', () => {
	test('should render input element', async () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).toBeInTheDocument();
	});

	test('should render several input elements', async () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping', 'Pet my Cat', 'Wash my Hands']);
		const divElements = screen.getAllByTestId('task-container');
		expect(divElements.length).toBe(3);
	});

	test('should render multiple items', async () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping', 'Pet my Cat', 'Wash my Hands']);
		const divElements = screen.getAllByTestId('task-container');
		expect(divElements.length).toBe(3);
	});

	test('tasks should not have completed class when initially rendered', async () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		expect(divElement).not.toHaveClass('todo-item-active');
	});

	test('tasks should have completed class when clicked', async () => {
		render(<MockTodo />);
		addTask(['Go Grocery Shopping']);
		const divElement = screen.getByText(/Go Grocery Shopping/i);
		fireEvent.click(divElement);
		expect(divElement).toHaveClass('todo-item-active');
	});
});
