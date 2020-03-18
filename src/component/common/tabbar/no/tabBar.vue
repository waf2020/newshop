<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
  #tabbar {
      display: flex; 
      background-color: #f6f6f6;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
  }

  
</style>