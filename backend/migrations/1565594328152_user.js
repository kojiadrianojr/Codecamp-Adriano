exports.shorthands = undefined;

exports.up = (pgm) => {
 pgm.createTable('users', {
 	id: {
 		type: 'serial',
 		primaryKey: true,
 	},
 	username: {
 		type: 'text',
 		notNull: 'true',
 	},
 	pasword: {
 		type: 'text',
 		notNull: true,
 	},
 });
};

exports.down = (pgm) => {

};
