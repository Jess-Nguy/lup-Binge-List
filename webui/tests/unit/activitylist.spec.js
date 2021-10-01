import { shallowMount } from '@vue/test-utils';
import ActivityList from '@/components/ActivityList.vue';

describe('ActivityList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome';
    const wrapper = shallowMount(ActivityList, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
