/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
		INSERT INTO "order" ("customer_id") VALUES
			(1),
			(2),
			(3);
	`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
        DELETE FROM "order" WHERE "customer_id" IN (1, 2, 3);
    `);
};
