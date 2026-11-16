const tasks = [
  {
    id: 1,
    title: 'Login sayfasını yaz',
    description: 'Kullanıcı girişi için backend kodu',
    status: 'pending',
    priority: 'high',
    assignee: 'musa',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Rapor hazırla',
    description: 'Haftalık ilerleme raporu',
    status: 'completed',
    priority: 'medium',
    assignee: 'ayse',
    createdAt: new Date().toISOString(),
  },
];

module.exports = tasks;