<template lang="html">
  <div class="ns-summary-list" :class="[{'ns-summary-space': showSpace}, 'ns-summary-size-' + size]">
    <slot size="size"></slot>
  </div>
</template>

<script>
export default {
  name: 'NsSummary',
  props: {
    size: { type: String, default: 'default' }, // large / medium / default / small / mini
    showSpace: {type: Boolean, default: true} // 是否有padding间隔
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    addItems (item) { // 添加某一项
      // console.log(this.$slots.default)
      const index = this.$slots.default.filter(item => {
        return item.elm.nodeType === 1 && /\bns-summary-item\b/.test(item.elm.className)
      }).indexOf(item.$vnode)
      // console.log(index)
      item.index = index.toString()
      this.items.splice(index, 0, item)
    }
  },
  watch: {
    items () {
      this.items.forEach(item => {
        item.width = 'calc(' + 100 / this.items.length + '% - 1px)'
      })
    }
  }
}
</script>
