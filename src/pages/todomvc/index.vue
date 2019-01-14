<config lang="json">
{
  navigationBarTitleText: 'TODOMVC2'
}
</config>

<template>
  <div class="app">
    <h1 class="title">todos</h1>

    <div class="todo-wrap">
      <section class="new-todo">
        <div class="new-todo__checkbox icon icon-jiantouxia"
          :class="{ 'z-show' : dropdown }"
          @click="onDropdown()"
        ></div>
        <input
          class="new-todo__input"
          autofocus="true"
          v-model="input"
          @confirm="onEnter($event)"
          placeholder="What needs to be done?"
        />
      </section>

      <section class="todo-list" v-show="dropdown">
        <ul>
            <li v-for="item in showList" :key="item.id" class="todo" :class="{ 'z-compeleted': item.status === COMPELETED }">
              <div class="todo__checkbox"
                @click="onStatusUpdate( item )"
              ></div>
              <div class="todo__msg">{{ item.label }}</div>
              <div class="todo__remove icon icon-guanbi" @click="onRemove(item)"></div>
            </li>
        </ul>
      </section>

      <section class="toolbar">
        <check-group :source="statusGroup" @checked="onFilterList($event)">
          <span slot-scope="scopeProps">{{scopeProps.item.label}}</span>
        </check-group>
        <div class="toolbar__label">{{ showList | len }} items left</div>
        <div class="toolbar__label toolbar__clear" @click="onClear(COMPELETED)">Clear compeleted</div>
      </section>
    </div>
  </div>
</template>

<script>
import CheckGroup from './CheckGroup.vue'

const COMPELETED = 1
const ACTIVE = 0
const ALL = -1
let uid = 0

export default {
  components: {
    CheckGroup
  },

  computed: {
    showList () {
      const newList = this.list.filter((todo) => {
        const showStatus = this.showStatus
        if (showStatus === ALL) {
          return true
        } else {
          return showStatus === todo.status
        }
      })
      return newList
    }
  },

  filters: {
    len (val) {
      return val.length
    }
  },

  created () {
    console.log('created')
    console.log(this)
  },

  onLoad () {
    console.log('onLoad')
  },

  mounted () {
    console.log('mounted')
  },

  onReady () {
    console.log('onReady')
  },

  onShow () {
    console.log('onShow')
  },

  data () {
    return {
      COMPELETED,
      ACTIVE,
      ALL,
      dropdown: true,
      input: '',
      showStatus: ALL,
      statusGroup: [
        { label: 'All', value: ALL, checked: true },
        { label: 'Active', value: ACTIVE },
        { label: 'Completed', value: COMPELETED }
      ],
      list: [
        {
          label: 'develop megalo',
          status: ACTIVE,
          id: uid++
        }
      ]
    }
  },

  methods: {
    onDropdown () {
      this.dropdown = !this.dropdown
    },

    onEnter (e) {
      const value = e.detail.value
      if (!value) {
        return
      }
      this.input = ''
      this.addTodo({
        label: value,
        id: uid++
      })
    },

    onStatusUpdate (todo) {
      if (todo.status === ACTIVE) {
        todo.status = COMPELETED
      } else {
        todo.status = ACTIVE
      }
    },

    onFilterList (e) {
      this.showStatus = e.item.value
    },

    onRemove (item) {
      this.list = this.list.filter(todo => todo !== item)
    },

    onClear (status = COMPELETED) {
      this.list = this.list.filter(todo => todo.status !== status)
    },

    addTodo (todo) {
      this.list.push({
        label: todo.label,
        status: todo.status || ACTIVE,
        id: uid++
      })
    }
  }
}
</script>

<style lang="less">
@width: 700rpx;
@height: 40px;

@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_638465_eirun4q043jl9pb9.eot?t=1524388336299'); /* IE9*/
  src: url('//at.alicdn.com/t/font_638465_eirun4q043jl9pb9.eot?t=1524388336299#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('//at.alicdn.com/t/font_638465_eirun4q043jl9pb9.ttf?t=1524388336299') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_638465_eirun4q043jl9pb9.svg?t=1524388336299#iconfont') format('svg'); /* iOS 4.1- */
}

.icon {
  font-family: 'iconfont';
}

.icon-guanbi:before { content: "\e624"; }

.icon-jiantouxia:before { content: "\e62d"; }

.icon-weigouxuan:before { content: "\e64a"; }

.icon-yigouxuan:before { content: "\e64b"; }

.todo-wrap {
  width: @width;
  margin-left: (750rpx - @width)/2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.title {
  width: @width;
  font-size: 100rpx;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
}

.new-todo {
  display: flex;
  margin: 0;
  width: @width;
  height: @height;
  font-size: 18px;
  line-height: 18px;
  border: 0;
  outline: none;
  color: inherit;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  box-sizing: border-box;

  &__checkbox {
    width: @height;
    height: @height;
    line-height: @height;
    font-size: 22px;
    color: #e6e6e6;
    text-align: center;
    &.z-show {
      color: #737373;
    }
  }

  &__input {
    flex: 1;
    height: @height - 12px;
    line-height: @height - 12px;
    padding: 6px;
    font-size: 12px;
  }
}

.todo {
  display: flex;
  width: @width;
  height: @height;
  position: relative;

  &__checkbox {
    font-family: 'iconfont';
    width: @height;
    height: @height;
    line-height: @height;
    text-align: center;
    font-size: 22px;
    &::before {
      color: #ddd;
      content: "\e64a";
    }
  }

  &__msg {
    flex: 1;
    line-height: @height;
    font-size: 18px;
    word-break: break-all;
    transition: color 0.4s;
  }

  &__remove {
    position: absolute;
    top: 12px;
    right: 12px;
    color: #757575;
  }

  &.z-compeleted {
    .todo__checkbox:before {
      color: #757575;
      content: "\e64b";
    }

    .todo__msg {
      color: #ddd;
      text-decoration: line-through;
    }
  }
}

.toolbar {
  color: #777;
  padding: 10px 15px 30px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &__label {
    font-size: 12px;
    float: left;
    text-align: left;
  }

  &__clear {
    float: right;
  }
}
</style>
