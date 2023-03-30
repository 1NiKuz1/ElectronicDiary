-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 30 2023 г., 14:24
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `electronic_journal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cabinets`
--

CREATE TABLE `cabinets` (
  `id` int NOT NULL,
  `num_cabinet` int NOT NULL,
  `name_cabinet` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `cabinets`
--

INSERT INTO `cabinets` (`id`, `num_cabinet`, `name_cabinet`) VALUES
(1, 1, 'кабинет математики'),
(2, 2, 'кабинет русского языка'),
(3, 3, 'кабинет английского языка'),
(4, 4, 'кабинет литературы');

-- --------------------------------------------------------

--
-- Структура таблицы `classes`
--

CREATE TABLE `classes` (
  `id` int NOT NULL,
  `name` varchar(10) NOT NULL,
  `year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `classes`
--

INSERT INTO `classes` (`id`, `name`, `year`) VALUES
(1, '1А', 2007),
(2, '1Б', 2007),
(3, '1В', 2007),
(4, '1Г', 2007);

-- --------------------------------------------------------

--
-- Структура таблицы `classes_users`
--

CREATE TABLE `classes_users` (
  `id` int NOT NULL,
  `class_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `classes_users`
--

INSERT INTO `classes_users` (`id`, `class_id`, `user_id`) VALUES
(1, 1, 3),
(2, 1, 4),
(3, 1, 5),
(4, 2, 6),
(5, 2, 7),
(6, 2, 8),
(7, 3, 9),
(8, 3, 10),
(9, 3, 11),
(10, 4, 12),
(11, 4, 13),
(12, 4, 14);

-- --------------------------------------------------------

--
-- Структура таблицы `journal`
--

CREATE TABLE `journal` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `subject_id` int NOT NULL,
  `note_id` int NOT NULL,
  `rating` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `journal`
--

INSERT INTO `journal` (`id`, `student_id`, `teacher_id`, `subject_id`, `note_id`, `rating`, `date`) VALUES
(1, 3, 2, 4, 2, 5, '2023-03-01'),
(2, 3, 2, 1, 2, 5, '2023-03-01'),
(3, 3, 2, 1, 1, 5, '2023-03-02'),
(4, 3, 2, 2, 2, 5, '2023-03-01'),
(5, 3, 2, 1, 1, 5, '2023-03-02'),
(6, 3, 2, 2, 2, 5, '2023-03-03'),
(7, 3, 2, 1, 3, 5, '2023-03-03'),
(8, 3, 2, 2, 1, 5, '2023-03-03'),
(9, 3, 15, 2, 2, 5, '2023-03-01'),
(10, 3, 15, 3, 1, 5, '2023-03-01'),
(11, 3, 15, 2, 2, 5, '2023-03-01'),
(12, 3, 15, 3, 3, 5, '2023-03-02'),
(13, 3, 15, 2, 1, 5, '2023-03-02'),
(14, 3, 15, 3, 2, 5, '2023-03-02'),
(15, 3, 15, 2, 3, 5, '2023-03-03');

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE `notes` (
  `id` int NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`id`, `name`) VALUES
(1, 'Контрольная работа'),
(2, 'Самостоятельная работа'),
(3, 'Проверочная работа');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'admin'),
(2, 'teacher'),
(3, 'student');

-- --------------------------------------------------------

--
-- Структура таблицы `schedule`
--

CREATE TABLE `schedule` (
  `id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `subject_id` int NOT NULL,
  `class_id` int NOT NULL,
  `cabinet_id` int NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `schedule`
--

INSERT INTO `schedule` (`id`, `teacher_id`, `subject_id`, `class_id`, `cabinet_id`, `time`, `date`) VALUES
(1, 2, 2, 1, 2, '08:00:00', '2023-03-01'),
(2, 2, 4, 2, 3, '08:50:00', '2023-03-01'),
(3, 2, 4, 1, 3, '09:40:00', '2023-03-01'),
(4, 15, 2, 1, 2, '08:50:00', '2023-03-01'),
(5, 15, 3, 2, 4, '08:00:00', '2023-03-01'),
(6, 15, 2, 2, 2, '09:40:00', '2023-03-01'),
(7, 2, 4, 1, 3, '08:00:00', '2023-03-02'),
(8, 2, 1, 1, 1, '08:50:00', '2023-03-02'),
(9, 15, 3, 1, 4, '09:40:00', '2023-03-02'),
(10, 15, 2, 2, 2, '08:00:00', '2023-03-02'),
(11, 15, 3, 2, 4, '08:50:00', '2023-03-02'),
(12, 2, 1, 2, 1, '09:40:00', '2023-03-02'),
(13, 2, 4, 1, 3, '08:00:00', '2023-03-03'),
(14, 2, 1, 1, 1, '08:50:00', '2023-03-03'),
(15, 15, 2, 1, 2, '09:40:00', '2023-03-03'),
(16, 15, 2, 2, 2, '08:00:00', '2023-03-03'),
(17, 15, 3, 2, 4, '08:50:00', '2023-03-03'),
(18, 2, 1, 2, 1, '09:40:00', '2023-03-03');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` int NOT NULL,
  `subject_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `subject_name`) VALUES
(1, 'Математика'),
(2, 'Русский язык'),
(3, 'Литература'),
(4, 'Английский язык');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `login` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(250) NOT NULL,
  `token` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `login`, `password`, `token`, `role_id`) VALUES
(1, 'Григорий К. А.', 'admin', 'admin', NULL, 1),
(2, 'Морозова Н. А.', 'teacher', 'teacher', NULL, 2),
(3, 'Иванов И. И.', 'student0101A', 'student', '58bddcf8-a35d-476c-9d36-8c6b69a35916', 3),
(4, 'Иванов И. И.', 'student0102A', 'student', NULL, 3),
(5, 'Иванов И. И.', 'student0103A', 'student', NULL, 3),
(6, 'Иванов И. И.', 'student0101B', 'student', 'd7ee3fac-8656-46bc-aba2-a081bc81e84a', 3),
(7, 'Иванов И. И.', 'student0102B', 'student', NULL, 3),
(8, 'Иванов И. И.', 'student0103B', 'student', NULL, 3),
(9, 'Иванов И. И.', 'student0101V', 'student', NULL, 3),
(10, 'Иванов И. И.', 'student0102V', 'student', NULL, 3),
(11, 'Иванов И. И.', 'student0103V', 'student', NULL, 3),
(12, 'Иванов И. И.', 'student0101G', 'student', NULL, 3),
(13, 'Иванов И. И.', 'student0102G', 'student', NULL, 3),
(14, 'Иванов И. И.', 'student0103G', 'student', NULL, 3),
(15, 'Кудинова С. С.', 'teacher2', 'teacher2', NULL, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cabinets`
--
ALTER TABLE `cabinets`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `classes_users`
--
ALTER TABLE `classes_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `classes_users_users` (`user_id`),
  ADD KEY `classes_users_classes` (`class_id`);

--
-- Индексы таблицы `journal`
--
ALTER TABLE `journal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journal_students` (`student_id`),
  ADD KEY `journal_subjects` (`subject_id`),
  ADD KEY `journal_notes` (`note_id`),
  ADD KEY `journal_teachers` (`teacher_id`);

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schedule_classes` (`class_id`),
  ADD KEY `schedule_cabinets` (`cabinet_id`),
  ADD KEY `schedule_subjects` (`subject_id`),
  ADD KEY `schedule_teachers` (`teacher_id`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cabinets`
--
ALTER TABLE `cabinets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `classes_users`
--
ALTER TABLE `classes_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `journal`
--
ALTER TABLE `journal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `classes_users`
--
ALTER TABLE `classes_users`
  ADD CONSTRAINT `classes_users_classes` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `classes_users_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `journal`
--
ALTER TABLE `journal`
  ADD CONSTRAINT `journal_notes` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_students` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_subjects` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `journal_teachers` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_cabinets` FOREIGN KEY (`cabinet_id`) REFERENCES `cabinets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_classes` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_subjects` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_teachers` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
