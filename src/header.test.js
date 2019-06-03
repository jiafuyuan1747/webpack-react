import React from 'react';
import { mount } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
  it('should all Todos length+1 when click input add', () => {
    const wrapper = mount(<Header />);
    const currentCount = wrapper.state().allTodos.length;
    // expect(currentCount).toBe(1);
    // expect(wrapper.find('.inputadd')).toHaveLength(1);
    wrapper.find('.input-add').at(0).simulate('click');
    expect(wrapper.state().allTodos.length).toBe(currentCount + 1);
  });

  it('should delete todo item from state', () => {
    const wrapper = mount(<Header />);
    const currentCount = wrapper.state().allTodos.length;
    const index = 0;
    wrapper.find('.delete-button').at(index).simulate('click');
    expect(wrapper.state().allTodos.length).toBe(currentCount - 1);
  });
  it('donechangetest', () => {
    const wrapper = mount(<Header />);
    const index = 0;
    wrapper.find('.change-done').at(index).simulate('change');
    // 要找到某一个input 对这一个input进行检查

    expect(wrapper.state().allTodos[index].done).toBe(true);
  });
});
