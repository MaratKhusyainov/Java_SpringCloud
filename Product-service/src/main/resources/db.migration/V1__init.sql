CREATE TABLE `products`
(
    `product_id` bigint(15)   NOT NULL AUTO_INCREMENT,
    `title_field`  varchar(255) NOT NULL,
    `price_field`   int(11)   DEFAULT NULL,


    PRIMARY KEY (`product_id`)
);
insert into products (title_field, price_field)
values ('Product 1', 100),
       ('Product 2', 200),
       ('Product 3', 300),
       ('Product 4', 400),
       ('Product 5', 500),
       ('Product 6', 600),
       ('Product 7', 700),
       ('Product 8', 800);