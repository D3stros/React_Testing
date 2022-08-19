const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: 'Tom',
					last: 'H',
				},
				picture: {
					large: 'https://randomuser.me/api/portraits/men/39.jpg',
				},
				login: {
					username: 'TheMr',
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
