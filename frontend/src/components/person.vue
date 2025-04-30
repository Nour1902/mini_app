<template>
  <div class="layout">
    <Sidebar />

    <main class="content">
      <div class="empty-box">
        <div class="icon-circle">🔍</div>
        <h2>No Coaches Found</h2>
        <p>
          It looks like no coaches are registered yet. <br />
          Start by adding coaches to guide students through personalized soft skill development and
          monitor their progress throughout the program.
        </p>
        <button class="add-btn">➕ Add Person</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.empty-box {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  max-width: 480px;
  width: 100%;
}

.icon-circle {
  background-color: #f3e8ff;
  color: #9333ea;
  font-size: 24px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #111827;
}

p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
}

.add-btn {
  padding: 10px 24px;
  background-color: #9333ea;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.add-btn:hover {
  background-color: #7e22ce;
}
</style>
