import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';


describe('Pruebas en el componente <GifItem/>', () => {

    const title = 'Dragon Ball';
    const url = 'http://localhost/https//dragonball.com/goku.png';

        test('debería hacer match con el snapshot', () => {

            const { container } = render ( <GifItem title = { title } url={ url } /> );
            expect ( container ).toMatchSnapshot();
        });

        test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

            render ( <GifItem title = { title } url={ url } /> );
            // screen.debug();
            // expect( screen.getByRole('img').src).toBe(url);
            // expect( screen.getByRole('alt').src).toBe(title);
            const { src, alt } = screen.getByRole('img');
            expect ( src ).toBe( url );
            expect ( alt ).toBe ( title );
           
        });

        test('debe de mostrar que el titulo existe', () => {

            render ( <GifItem title = { title } url={ url } /> );
            expect ( screen.getByText( title ) ).toBeTruthy();
        });
});

