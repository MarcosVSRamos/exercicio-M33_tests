import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Adiciona dois comentarios', () => {
        render (<PostComment />);

        const texto = screen.getByTestId('texto-comentario');
        const botao = screen.getByTestId('comentairo-botao');

        fireEvent.change(texto, {target: {value: 'Comentario Teste'} });
        fireEvent.click(botao);

        fireEvent.change(texto, {target: {value: 'Segundo Comentario Teste'} });
        fireEvent.click(botao);

        const testeDeComentarios = screen.getAllByTestId('comentario');
        expect(testeDeComentarios).toHaveLength(2);
        expect(testeDeComentarios[0]).toHaveTextContent('Comentario Teste');
        expect(testeDeComentarios[1]).toHaveTextContent('Segundo Comentario Teste');

    });

});