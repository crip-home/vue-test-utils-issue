import Vue from "vue"

export default Vue.extend({
  name: "example",
  template: `<div>Hello</div>`,
  props: { prop1: { type: String } },
  computed: {
    comp1(): string {
      return `${this.prop1}_comp`
    },
  },
})
