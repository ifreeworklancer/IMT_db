CREATE TABLE `nodejs`.`users` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(255) NOT NULL , 
    `email` VARCHAR(255) NOT NULL , 
    `password` VARCHAR(255) NOT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`id`), UNIQUE (`email`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;



DROP TABLE `nodejs`.`news`;

CREATE TABLE `nodejs`.`news` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `title` VARCHAR(255) NOT NULL , 
    `description` TINYTEXT NULL , 
    `body` MEDIUMTEXT NULL ,
    `user_id` INT UNSIGNED NOT NULL ,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `nodejs`.`posts` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `title` VARCHAR(255) NOT NULL , 
    `description` TINYTEXT NULL , 
    `body` MEDIUMTEXT NULL ,
    `user_id` INT UNSIGNED NOT NULL ,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

    
CREATE TABLE `nodejs`.`products` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `title` VARCHAR(255) NOT NULL , 
    `description` TINYTEXT NULL , 
    `body` MEDIUMTEXT NULL ,
    `price` INT NOT NULL , 
    `discount` INT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `nodejs`.`carts` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `product_id` INT UNSIGNED NOT NULL , 
    `quantity` INT NULL , 
    `user_id` INT UNSIGNED NOT NULL ,
    `order_id` INT UNSIGNED NOT NULL ,
    `price` INT NOT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;
    
    
CREATE TABLE `nodejs`.`orders` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `user_id` INT UNSIGNED NOT NULL ,
    `status` enum('approval','no_dial','finished','declined') NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` TIMESTAMP NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;