<template>
  <div class="app-container">
    <div>
      <div style="margin-bottom:15px;">
        你现在的权限是： {{ roles }}
      </div>
      切换权限:
      <el-radio-group v-model="switchRoles">
        <el-radio-button label="editor" />
        <el-radio-button label="admin" />
      </el-radio-group>
    </div>
    <div :key="key" style="margin-top:30px;">
      <div>
        <span v-permission="['admin','editor']" class="permission-alert">
          这是修改权限的页面
        </span>
      </div>

      <div>
        <span v-permission="['admin']">你现在的权限为admin，显示的是Form表单页面</span>
      </div>

      <div>
        <span v-permission="['editor']">你现在的权限为editor，显示的是List列表页面</span>
      </div>
    </div>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数

export default {
  name: 'Changeroles',
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.key++
        })
      }
    }
  },
  methods: {
    checkPermission
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

