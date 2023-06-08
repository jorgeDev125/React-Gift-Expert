import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock( '../../src/hooks/useFetchGif' );  
//se crea el mock para asumir que el custom hook funciona de manera correcta
// sin tener que hacer pruebas de integración



describe('Pruebas en el componente <GifGrid/>', () => {

    const category = 'Dragon Ball';

    test('debe de mostrar el oading inicialmente ', () => {

        useFetchGif.mockReturnValue ({
            images: [], 
            isLoading: true,
        });

        render ( <GifGrid category = { category } /> );
        expect ( screen.getByText( 'Cargando...' ) );
        expect ( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGif ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https//localhost.goku.png'
            }, 
            {
                id: 'DEF',
                title: 'Perry',
                url: 'https//localhost.perry.png'
            }, 
        ];

        useFetchGif.mockReturnValue ({
            images: gifs, 
            isLoading: false,
        });

        render ( <GifGrid category={ category }/> );

        expect (screen.getAllByRole('img').length).toBe(2);
    });

});