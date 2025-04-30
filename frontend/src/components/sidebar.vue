<template>
    <aside class="sidebar">
      <nav class="menu">
        <button class="menu-item active">
          <span>📊</span>
          <span>Dashboard</span>
        </button>
        <button class="menu-item">
          <span>👥</span>
          <span>Users Management</span>
        </button>
        <button class="menu-item">
          <span>🧠</span>
          <span>Skills Management</span>
        </button>
      </nav>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: white;
    border-right: 1px solid #e0e0e0;
    padding: 24px;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .menu-item:hover {
    background-color: #f5f5f5;
  }
  
  .menu-item.active {
    background-color: #a855f7;
    color: white;
    border-color: #a855f7;
  }
  </style>
  