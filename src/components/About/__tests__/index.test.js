import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
describe('About component', () => {
    //render about test
    //1st test
    it('renders', () => {
        render(<About/>);
    });
    //2nd test or the test case
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})