import React from 'react';
import { mount } from 'enzyme';
import Header from './header'
describe('<Header />', () => {
    it('should allTodos length+1 when click inputadd', () => {
        const wrapper = mount(<Header />);
        wrapper.find('.inputadd').simulate('click');
        expect(wrapper.state().allTodos.length).toBe(1);
    });

    it('deletetest', () => {
        const  wrapper = mount(<Header />);
        wrapper.find('.deletebutton').simulate('click');
        expect(wrapper.state().allTodos.length).toBe();
    });
    it('donechangetest', (index) => {
        const  wrapper = mount(<Header />);
        changedone(index);
        expect(wrapper.state().allTodos[index].done).toBe();
    });

});
