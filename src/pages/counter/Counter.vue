<template>
  <div class="counter">
    <!-- component -->
    <!-- <CompA
      :message="counter"
    />
    <CompA
      v-if="index % 2 === 0"
      v-for="(item, index) in list"
      :key="item.id"
      :message="index"
    /> -->

    <!-- slot -->
    <!-- <CompA> -->
      <!-- <div :class="[ `count-${counter}` ]"></div>
      <div>{{`tail-${counter}`}}</div> -->

      <!-- <template slot-scope="infoScope">
        {{ infoScope.info.name }}
      </template> -->

      <!-- counter {{ counter }}

      <template slot="footer">
        hello footer {{ counter }}
        <CompB>
          ===== compB slot start =====
          <button @click="onClick($event)"></button>
            click_me
          </button>
          <input v-model="inputValue">
          <div>{{ inputValue }}</div>
          parent counter:  {{ counter }}
          <div class="box box-red" :style="{ height: `${counter}px`, width: `${counter}px` }" style="display: inline-block;"></div>
          ===== compB slot end =====

          <CompC @click="onClick($event)" :message="'compc-counter: ' + counter"></CompC>
        </CompB>
      </template> -->

    <!-- </CompA> -->

    <!-- v-model -->
    <!-- <input v-model="inputValue">
    <div>{{ inputValue }}</div> -->

    <!-- class style filter -->
    <!-- <button @click="onPlus">+</button>
    <button @click="onMinus">-</button>
    <div class="box box-red" :style="{ height: `${counter}px`, width: `${counter}px` }" style="display: inline-block;"></div>
    {{ counter | tail }} -->

    <!-- v-if -->
    <!-- <div v-if="counter < 10"> 10 - </div>
    <div v-else> 10 + </div> -->

    <!-- v-for -->
    <!-- <div v-for="(item, index) in list" :key="item.id">
      <div :class="[ 'c' + index ]"  >{{ item.id }}</div>
      <div :class="[ 'c' + index ]" >{{ item.info.name }}</div>
    </div> -->

    <!-- <template v-for="(item, index) in list">
      <div :class="[ 'c' + index ]" :key="item.id">{{ item.id }}</div>
      <div :class="[ 'c' + index ]" :key="item.id" >{{ item.info.name }}</div>
    </template> -->

    <!-- <CompA>
      <template slot="body" slot-scope="compaScope">
        <template v-for="(item, index) in compaScope.list">
          <div :key="item.id" >{{ index }} : {{ item.info.name }}</div>
        </template>
      </template>
    </CompA> -->
    
    <!-- event -->
    <!-- <button @click="onClick($event)">
      out_click_me
    </button> -->

    <!-- v-show -->
    <div>v-show</div>
    <div v-show="counter > 5">v-show {{ counter }}</div>

  </div>
</template>

<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'
import CompC from './CompC.vue'

export default {
  mpType: 'page',
  filters: {
    tail(t) {
      return `${t}_tail`
    }
  },
  components: {
    CompA,
    CompB,
    CompC,
  },
  created() {
    console.log( 'created', this )
    setTimeout(() => {
      this.list = []
      this.counter = 100
    }, 5000)
  },

  data() {
    return {
      counter: 5,
      inputValue: 'input',
      list: [
        { id: 1, text: 10, info: { name: 100 } },
        { id: 2, text: 20, info: { name: 200 } },
        { id: 3, text: 30, info: { name: 300 } },
        { id: 4, text: 40, info: { name: 400 } }
      ]
    }
  },

  methods: {
    onMinus() {
      this.counter = this.counter - 1
    },

    onPlus() {
      this.counter = this.counter + 1
    },

    onClick(e) {
      console.log('out', e)
    }
  }
}
</script>

<style lang="less" scoped>
  .app {
    font-size: 29px;
  }

  .app .foo {
    color: blue;
  }

  .box.box-red {
    background: red;
  }
</style>

<style lang="css" scoped>
  .app1 {
    font-size: 29px;
  }
</style>
