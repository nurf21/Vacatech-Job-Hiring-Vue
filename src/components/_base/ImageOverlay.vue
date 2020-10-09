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
        <img src="../../assets/logo/vacatechwhite.png" />
      </div>
      <div class="text-text">
        <h1>
          Temukan developer berbakat dan terbaik di berbagai bidang keahlian
        </h1>
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

@media screen and (max-width: 768px) {
  .img-container {
    width: 300px;
    height: 400px;
  }

  .image-content {
    position: absolute;
  }

  .image-content img {
    width: 300px;
    height: 450px;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
  }

  .image-overlay img {
    width: 300px;
    height: 450px;
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
    font-size: 22px;
    line-height: 36px;
    color: #ffffff;
  }
}

@media screen and (max-width: 1024px) and (min-width: 800px) {
  .img-container {
    max-width: 420px;
    max-height: 570px;
  }

  .image-content {
    position: absolute;
  }

  .image-content img {
    max-width: 420px;
    max-height: 570px;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
  }

  .image-overlay img {
    max-width: 420px;
    max-height: 570px;
    object-fit: cover;
  }

  .text .text-text {
    padding: 7em 0em;
  }

  .text .text-text h1 {
    font-size: 36px;
    line-height: 36px;
  }
}
</style>

<script>
export default {
  name: 'ImageOverlay'
}
</script>
