<template>
  <div class="category">
    <h3>{{title}}</h3>

    <slot>
        Only displayed if no slot content
    </slot>
  </div>
</template>

<script>
export default {
    name: 'category',
    props: ['title']
}
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>