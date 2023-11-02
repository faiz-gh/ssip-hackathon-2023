/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
		INSERT INTO "customer" ("customer_name") VALUES
			('Liam James'),
			('Olivia Rose'),
			('Emma Grace');
	`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
        DELETE FROM "customer" WHERE "customer_name" IN ('Liam James', 'Olivia Rose', 'Emma Grace');
    `);
};
