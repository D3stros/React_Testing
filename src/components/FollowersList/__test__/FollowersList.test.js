import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './../FollowersList';

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('FollowersList', () => {
	beforeEach(() => {
		console.log('RUNNING BEFORE EACH TEST');
	});

	beforeAll(() => {
		console.log('RAN ONCE BEFORE ALL TESTS');
	});

	afterEach(() => {
		console.log('RUNNING AFTER EACH TEST');
	});
	afterAll(() => {
		console.log('RAN ONCE BEFORE ALL TESTS');
	});
	test('should render follower items', async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId('follower-item-0');
		expect(followerDivElement).toBeInTheDocument();
	});

	// test('should render multiple follower items', async () => {
	// 	render(<MockFollowersList />);
	// 	const followerDivElement = await screen.findAllByTestId(/follower-item/i);
	// 	expect(followerDivElement.length).toBe(5);
	// });
});
