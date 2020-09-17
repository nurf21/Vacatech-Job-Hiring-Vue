<template>
  <div class="img-container">
    <div class="image-content">
      <img src="../../assets/img/img01.png" />
    </div>
    <div class="image-overlay">
      <img src="../../assets/img/overlay.png" />
    </div>
    <div class="text">
      <img src="../../assets/logo/light.png" />
    </div>
  </div>
</template>

<style scoped>
.image-content {
  position: absolute;
}

.image-content img {
  width: 500px;
  height: 580px;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
}

.image-overlay img {
  width: 500px;
  height: 580px;
  object-fit: cover;
}

.text {
  position: absolute;
}
</style>

<script>
export default {
  name: 'ImageOverlay'
}
</script>
