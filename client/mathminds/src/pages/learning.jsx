import React from 'react'
import Filtercomponent from '../components/learning/filtercomponent'
import Cardpost from '../components/learning/cardpost'

const cardsData = [
    {
        title: 'Título do Card 1',
        description:
            'Descrição do conteúdo que será exibido no card 1 do Brasil Escola. Aqui você pode adicionar mais informações.',
        imageUrl: 'caminho/para/imagem1.jpg',
        imageAlt: 'Imagem do Card 1',
        linkUrl: '#link-para-conteudo1',
    },
    {
        title: 'Título do Card 2',
        description:
            'Descrição do conteúdo que será exibido no card 2 do Brasil Escola. Aqui você pode adicionar mais informações.',
        imageUrl: 'caminho/para/imagem2.jpg',
        imageAlt: 'Imagem do Card 2',
        linkUrl: '#link-para-conteudo2',
    },
    // Adicione mais objetos aqui para criar mais cards
];



function Learning() {



    return (
        <div className='min-h-screen flex items-center justify-center p-2 bg-red-300 dark:bg-gray-900 accent-red-600 dark:text-white'>

            <div className='flex flex-col p-4 gap-6  dark:bg-white/10 rounded-lg border dark:border-white/20'>
                <Filtercomponent />
                {cardsData.map((card, index) => (
                    <Cardpost key={index} {...card} />
                ))}
            </div>




        </div>
    )
}

export default Learning