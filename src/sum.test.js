// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

const sum = require('./sum');

describe('加法函数测试', () => {
    it('这应该不影响吧', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it(
        '这只是一个名字',()=>{
            expect(sum(1,3)).toBe(4)
        }
    );
});


