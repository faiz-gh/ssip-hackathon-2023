/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
		INSERT INTO "product" ("product_name", "quantity", "price") VALUES
			('Apple iPhone 13 Pro', 10, 999.99),
			('Samsung Galaxy S22 Ultra', 20, 1199.99),
			('Google Pixel 6 Pro', 30, 899.99);
	`);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
        DELETE FROM "product" WHERE "product_name" IN ('Apple iPhone 13 Pro', 'Samsung Galaxy S22 Ultra', 'Google Pixel 6 Pro');
    `);
};
