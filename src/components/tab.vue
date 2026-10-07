<template>
  <div class="tab-list">
    <label class="tabs">
      <input type="radio" name="tabs" value="generators" checked>
      <span>Generators</span>
    </label>

    <label class="tabs">
      <input type="radio" name="tabs" value="shop">
      <span>Shop</span>
    </label>

    <label class="tabs">
      <input type="radio" name="tabs" value="settings">
      <span>Settings</span>
    </label>
  </div>
</template>

<style scoped>
.tab-list {
  width: 175px;
}

.tabs {
  display: block;
  position: relative;
  cursor: pointer;
}

.tabs input {
  position: absolute;
  
  opacity: 0;
  width: 1px;
  height: 1px;
}

.tabs span {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  padding-left: 10px;
  font-size: 16px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transition: background-color 0.2s, color 0.2s;
}

.tabs:hover span {
  background-color: #999999;
}

.tabs input:checked + span {
  background-color: white;
  border: white;
  color: black;
}

.tabs input:focus-visible + span {
  outline: 2px solid skyblue;
  outline-offset: 2px;
}
</style>