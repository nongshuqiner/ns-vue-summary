<template lang="html">
  <a class="ns-summary-item" :class="['ns-summary-type-' + type]" :href="href" :target="target" :style="allWidthStyle">
    <p class="ns-summary-item-desc" v-if="$slots.describe || describe">
      <slot name="describe" v-if="$slots.describe !== undefined"></slot>
      <template v-else> {{describe}} </template>
    </p>
    <div class="ns-summary-item-title" v-if="$slots.title || title">
      <slot name="title" v-if="$slots.title !== undefined"></slot>
      <template v-else>{{title}}</template>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NsSummaryItem',
  props: {
    // size: { type: String, default: 'default' }, // large / medium / default / small
    type: { type: String, default: 'primary' }, // primary-主要 info-蓝色 gray-灰色 success-绿色 warning-警告 danger-失败
    title: String, // 标题
    describe: String, // 描述
    target: { type: String, default: '_blank' }, // target
    href: String // 是否有更多
  },
  data () {
    return {
      index: null,
      width: null
    }
  },
  mounted () {
    this.$parent.addItems(this)
  },
  computed: {
    allWidthStyle () {
      let style = {}
      if (this.width) {
        style.width = this.width
      }
      return style
    }
  }
}
</script>
