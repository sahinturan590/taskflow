const tasks = require('../data/tasks');

let nextId = tasks.length + 1;

// GET /tasks → tüm görevleri listele
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// GET /tasks/:id → tek görevi getir
const getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }
  res.status(200).json(task);
};

// POST /tasks → yeni görev ekle
const createTask = (req, res) => {
  const { title, description, priority, assignee } = req.body || {};

  if (!title) {
    return res.status(400).json({ message: 'title alanı zorunludur' });
  }

  const newTask = {
    id: nextId++,
    title,
    description: description || '',

    status: 'pending',
    priority: priority || 'medium',
    assignee: assignee || null,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// PUT /tasks/:id → görevi güncelle (sadece gönderilen alanlar değişir)
const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }

  const { title, description, status, priority, assignee } = req.body || {};

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  if (priority !== undefined) task.priority = priority;
  if (assignee !== undefined) task.assignee = assignee;

  res.status(200).json(task);
};

// DELETE /tasks/:id → görevi sil
const deleteTask = (req, res) => {

  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Görev bulunamadı' });
  }

  const deleted = tasks.splice(index, 1)[0];
  res.status(200).json({ message: 'Görev silindi', task: deleted });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};