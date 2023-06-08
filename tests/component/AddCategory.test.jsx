import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en el componente <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => { 

        render ( <AddCategory onNewCategory = { () => {} } />);
        const input = screen.getByRole ('textbox');

        fireEvent.input( input, { target: { value: 'Dragon Ball' }});
        expect ( input.value ).toBe ( 'Dragon Ball');

    });

    test('debe de llamar el onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Dragon Ball';
        const onNewCategory = jest.fn();

        //TODO: ???

        render ( <AddCategory onNewCategory = { onNewCategory } />);

        const input = screen.getByRole ( 'textbox' );
        const form = screen.getByRole ( 'form' );

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );
        // screen.debug();
        expect(input.value).toBe('');

        expect ( onNewCategory ).toHaveBeenCalled();
        expect ( onNewCategory ).toHaveBeenCalledTimes(1);
        expect ( onNewCategory ).toHaveBeenCalledWith(inputValue);

    });

    test('no debe de llamar el onNewCategory si el input está vacio', () => {

    
        const onNewCategory = jest.fn();

        //TODO: ???

        render ( <AddCategory onNewCategory = { onNewCategory } />);
      
        const form = screen.getByRole ( 'form' );

        fireEvent.submit( form );

        expect ( onNewCategory ).not.toHaveBeenCalled();
        expect ( onNewCategory ).toHaveBeenCalledTimes(0);
     

    });
});