<template>
  <form action="/api/upload" enctype="multipart/form-data" method="POST">
    <input name="file" type="file" />
    <button>Upload & Analyse</button>
  </form>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
