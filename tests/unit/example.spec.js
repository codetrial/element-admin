import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/layout/AppFooter.vue'

describe('AppFooter.vue', () => {
  it('render app footer', () => {
    const wrapper = shallowMount(AppFooter, {})
    expect(wrapper.text()).toMatch('Copyright')
  })
})
