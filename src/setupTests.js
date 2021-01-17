// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import EzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{shallow} from 'enzyme';

Enzyme.configure({adapter: new EzymeAdapter()});