import expect from "expect"
import Vue from "vue"
import { shallow } from "vue-test-utils"

import Component from "../src/Component"

describe("Component", () => {
  it("Computes correct value from props", () => {
    const wrapper = shallow(Component, { propsData: { prop1: "1" } })
    expect(wrapper.vm.prop1)
  })
})
