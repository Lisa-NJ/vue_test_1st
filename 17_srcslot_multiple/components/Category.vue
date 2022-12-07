<template>
  <div class="category">
    <h3>{{title}}</h3>

    <slot name="center">
        Only displayed if no slot content
    </slot>
    <slot name="footer">
        Only displayed if no slot content - 2
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