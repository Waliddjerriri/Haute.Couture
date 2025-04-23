-- إنشاء قاعدة بيانات
CREATE DATABASE HauteCouture;

-- استخدام قاعدة البيانات
USE HauteCouture;

-- إنشاء جدول للمنتجات
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- إدخال بيانات مثال على المنتجات
INSERT INTO products (name, description, price, image) 
VALUES
('Robe princesse glamour bleu nuit', 'Une magnifique robe princesse en bleu nuit', 10800.00, 'products1.png'),
('Robe velours noir et blanc', 'Robe élégante en velours noir et blanc', 6800.00, 'products2.png'),
('Fluidité de la soie', 'Robe en soie fluide', 9500.00, 'products3.png'),
('Robe mousseline', 'Robe délicate en mousseline', 8000.00, 'products4.png');

-- إنشاء جدول للفئات
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);

-- إدخال بيانات مثال على الفئات
INSERT INTO categories (name, image) 
VALUES
('Catégorie 1', 'categorie1.jpg'),
('Catégorie 2', 'categorie2.jpg'),
('Catégorie 3', 'categorie3.jpg');

-- إنشاء جدول للطلبات
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    customer_address TEXT,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- مثال على إدخال طلب
INSERT INTO orders (product_id, customer_name, customer_email, customer_phone, customer_address, quantity, total_price) 
VALUES
(1, 'Wali Djerriri', 'wali@example.com', '+213675640362', 'Tenira, Sidi Bel-Abbes, Algerie', 2, 21600.00);

-- إنشاء جدول للمراجعات (الآراء)
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- مثال على إدخال مراجعة
INSERT INTO reviews (product_id, customer_name, rating, comment) 
VALUES
(1, 'Wali Djerriri', 5, 'J\'adore cette robe, elle est magnifique et très confortable.');
