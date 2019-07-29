<template>
<transition name="slide">
  <div class="prop-wrapper" v-show="vnode">
    <section class="prop-header">props</section>
    <section class="prop-content">
      <div class="prop-cell" v-for="(item,key) in prop" :key="key">
        <div class="label">{{key}}</div>
        <template v-if="item.type && item.type.name === 'Boolean'">
          <input type="checkbox" value="true" v-model="item.value" @change="onChangeEvent(key)" />
        </template>
        <template v-else>
          <input type="text" v-model="item.value" @change="onChangeEvent(key)" />
        </template>
      </div>
    </section>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    vnode: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {
    prop() {
      if (this.vnode) {
        return this.mergeProps(this.vnode.vnode.componentOptions.Ctor.options.props, this.vnode.data.attrs || {});
      }
      return {};
    }
  },
  methods: {
    mergeProps(props, toMerge) {
      let result = {};
      for (let key in props) {
        if (toMerge[key] !== undefined) {
          result[key] = Object.assign({}, props[key], { value: toMerge[key] });
        } else {
          let value = props[key].default;
          if (typeof props[key].default === 'function') {
            value = props[key].default();
          }
          result[key] = Object.assign({}, props[key], { value });
        }
      }
      return result;
    },
    onChangeEvent(key) {
      if (this.prop[key].value !== this.prop[key].default) {
        this.vnode.data.attrs[key] = this.prop[key].value;
      } else {
        delete this.vnode.data.attrs[key];
      }
      this.$emit('change');
    }
  },
  mounted() {}
}
</script>

<style lang="css" scoped>
.prop-wrapper{
  position: absolute;
  width: 100%;
  bottom: 0;
}
.prop-header{
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
  border-bottom: 1px solid #666;
}

.prop-content{
  text-align: center;
  min-height: 100px;
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateY(100%);
}
.prop-cell{
  display: inline-block;
  width: 33.3%;
  float: left;
  text-align: left;
}
.label{
  display: inline-block;
  width: 16%;
}

</style>
