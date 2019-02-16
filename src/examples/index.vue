<template>
  <div class="examples">
    <ns-summary class="my-summary" :show-space="true">
      <ns-summary-item title="title" describe="describe" type="gray" href="https://www.baidu.com/"></ns-summary-item>
      <ns-summary-item type="info">
        <template slot="title"> 综合用户 </template>
        <template slot="describe"> <i class="fa fa-user"></i>XX </template>
      </ns-summary-item>
      <ns-summary-item title="19 Sales">
        <template slot="describe"> 5000万元 </template>
      </ns-summary-item>
      <ns-summary-item title="FOLLOWING" describe="284" type="danger">
        <template slot="title"> <i class="fa fa-bullhorn"></i> FOLLOWING </template>
      </ns-summary-item>
      <ns-summary-item title="2 Photo Upload" type="success">
        <template slot="describe"> ...<i class="fa fa-tags"></i> </template>
      </ns-summary-item>
      <ns-summary-item title="15 Emails" type="warning">
        <template slot="describe"> Unread </template>
      </ns-summary-item>
    </ns-summary>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
