<template>
  <div id="toolbar">
    <slot></slot>
  </div>
</template>

<style>
#toolbar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}
</style>
