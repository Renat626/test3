DROP DATABASE whack;
CREATE DATABASE whack;
\connect whack;


CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    password VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE "order"(
    id SERIAL PRIMARY KEY,
    product VARCHAR(255),
    category VARCHAR(255),
    sell_type VARCHAR(255),
    location_your_buyer VARCHAR(255),
    user_id BIGINT,
    date DATE,
    price FLOAT,
    FOREIGN KEY (user_id) REFERENCES "user" (id)
);

CREATE TABLE wildberries_category (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255)
);

CREATE TABLE wildberries_product (
    id SERIAL PRIMARY KEY,
    product_id BIGINT,
    product_name VARCHAR(255),
    category_name VARCHAR(255),
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES wildberries_category (id)
);

CREATE TABLE report_list (
    id SERIAL PRIMARY KEY,
    report_id BIGINT,
    category_id BIGINT,
    subcategory_id BIGINT,
    raw VARCHAR(255),
    user_id BIGINT,
    order_id BIGINT
);

CREATE TABLE report (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    order_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES "user" (id),
    FOREIGN KEY (order_id) REFERENCES "order" (id)
);

CREATE TABLE report_category (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255),
    category_name_rus VARCHAR(255)
);

CREATE TABLE report_subcategory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    name_rus VARCHAR(255),
    view VARCHAR(255),
    position BIGINT,
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES report_category (id)
);