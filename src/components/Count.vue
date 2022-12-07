<template>
  <div>
    <h2>The Sum is: {{sum}}</h2>
    <select v-model.number="pace">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add1">+</button>
    <button @click="sub1">-</button>
    <button @click="addOdd">+ when the sum is odd</button>
    <button @click="addWait">+ later</button>
  </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {     
            sum : 0,
            pace: 1
        }
    },
    methods: {
        add1() {
            this.sum += this.pace
        },

        sub1() {
            this.sum -= this.pace
        },

        addOdd() {
            this.sum += (this.sum%2) ? this.pace : 0 
        },

        addWait() {
            setTimeout(() => {
                this.sum += this.pace
            }, 500);
        }
    }

}
</script>

