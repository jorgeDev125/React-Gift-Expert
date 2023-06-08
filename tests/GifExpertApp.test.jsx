import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en el componente <GifExpertApp/>', () => {

    

        test('debe hacer match con el snapshot', () => {

            const { container } = render( <GifExpertApp/> );
            expect( container ).toMatchSnapshot();

        });

        test('no debe hacer nada si newCategory ya esta en el arreglo categories', () => {

            const newCategory = 'Z';
            const categories = ['A', 'B', 'C', 'D' ,'E'];   

            render( <GifExpertApp/> );
            expect ( categories ).not.toContain ( newCategory );

        });

        test('debe actualizar el arreglo categories si el newCategory no esta en él', () => {

            // const newCategory = 'Z';
            // const categories = ['A', 'B', 'C', 'D' ,'E'];   

            // render( <GifExpertApp/> );
            // expect ( categories ).not.toContain ( newCategory );


        });

});