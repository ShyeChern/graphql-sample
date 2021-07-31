module.exports.users = [
	{
		id: 1,
		name: 'alex',
	},
	{
		id: 2,
		name: 'bob',
	},
	{
		id: 3,
		name: 'cait',
	},
];

module.exports.sales = [
	{
		id: 1,
		userId: 2,
		package: 'Red',
		date: '2021-02-03',
		attachment: 'uploads/attachments/1.pdf',
	},
	{
		id: 2,
		userId: 1,
		package: 'Green',
		date: '2021-12-23',
		attachment: null,
	},
	{
		id: 3,
		userId: 1,
		package: 'Blue',
		date: '2021-06-30',
		attachment: null,
	},
];
