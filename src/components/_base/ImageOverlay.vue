<template>
  <div class="img-container">
    <div class="image-content">
      <img src="../../assets/img/img01.png" />
    </div>
    <div class="image-overlay">
      <img src="../../assets/img/overlay.png" />
    </div>
    <div class="text">
      <div class="text-image">
        <img src="../../assets/logo/light.png" />
      </div>
      <div class="text-text">
        <h1>Temukan developer berbakat dan terbaik di berbagai bidang keahlian</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  width: 500px;
  height: 580px;
}

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
  position: relative;
  padding: 2.75em;
}

.text .text-image img {
  max-height: 24px;
}

.text .text-text {
  padding: 5em 0em;
}

.text .text-text h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 70px;
  color: #ffffff;
}
</style>

<script>
export default {
  name: 'ImageOverlay'
}
</script>
