import { expect } from 'chai';
import { getCompleteTodos } from '../selectors';

describe('The getCompleteTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'task 1',
            isCompleted: true
        }, {
            text: 'btc going moon',
            isCompleted: false
        }, {
            text: 'crypto is fake',
            isCompleted: false
        }];

        const expected = [{
            text: 'task 1',
            isCompleted: true
        }];

        const actual = getCompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);

    })
});