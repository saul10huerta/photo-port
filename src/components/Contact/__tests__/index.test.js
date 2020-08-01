import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    //baseline
    it('renders', () => {
        render(<Contact/>)
    });
    //snapshoot
    it('matches snapshot', () => {
        const { asFragment } = 
        render(<Contact/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

// test to see if the links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
        //arange
        const { getByTestId } = 
        render(<Contact />);
        //assert
        expect(getByTestId('h1contact')).toHaveTextContent('Contact Me');
        expect(getByTestId('buttoncontact')).toHaveTextContent('Submit');
    });
});