-- INSERT INTO roles(title)
-- VALUES 
-- ('admin'),
-- ('blogger');

-- INSERT INTO permissions(action)
-- VALUES
-- ('post'),
-- ('manage-users');

-- INSERT INTO roles_permissions (role_id, permission_id)
-- VALUES
-- (1, 1),
-- (1, 2),
-- (2, 1);

-- INSERT INTO users (role_id, email, first_name, last_name)
-- VALUES
-- (1, 'jasonoh1226@gmail.com', 'jason', 'oh');

-- INSERT INTO blog_categories (label, description) 
-- VALUES
-- ('JavaScript', 'Java Script'),
-- ('React', 'React'),
-- ('Vue', 'Vue'),
-- ('Tech Culture', 'Tech Culture'),
-- ('Tech News', 'Tech News'),
-- ('Cloud', 'Cloud Service'),
-- ('C++', 'C++'),
-- ('Java', 'Java'),
-- ('C', 'C'),
-- ('Asp.net', 'Asp.net'),
-- ('C#', 'C#'),
-- ('Visual Studio', 'Visual Studio'),
-- ('Brain Health', 'Brain Health');

-- INSERT INTO blog_posts (author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
-- VALUES
-- (1, 'Can anyone code?', 'I think anyone can code...', 'anyone_can_code.jpg', 1, 'anyone', 'code', 'anyone_can_code.jpg', 'Image'),
-- (1, 'Using AMS S3 for Stroing Blog Images', 'Using AMS S3 for Stroing Blog Images...', 'cloud_storage.jpg', 1, 'ams', 's3', 'cloud_storage.jpg', 'Image'),
-- (1, 'Popular Programming Languages in 2020', 'Popular Programming Languages in 2020...', 'programming_language.jpg', 1, 'popular', 'language', 'programming_language.jpg', 'Image'),
-- (1, 'Brain Hacks for Learning to Program', 'Brain Hacks for Learning to Program...', 'neuron.jpg', 1, 'brain', 'hacks', 'neuron.jpg', 'Image');

-- INSERT INTO blog_post_comments (post_id, author_id, comment)
-- VALUES
-- (1, 1, 'Totaly awesome.'),
-- (1, 1, 'Good article!');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(1, 5),
(2, 6),
(3, 4),
(3, 5),
(4, 13);
