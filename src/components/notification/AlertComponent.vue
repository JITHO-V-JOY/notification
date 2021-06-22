<template>
    <div class="card">
      <div class="card-text">
          {{notification.title}}
      </div>
      <button class="showNotification">Show</button>
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    props: ['notification']
}
</script>