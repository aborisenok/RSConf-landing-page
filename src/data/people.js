const people = [
    {
        id: 1,
        name: 'Михаил Владимирович Анемподистов',
        occupation: 'Белорусский художник, дизайнер, поэт, культуролог, искусствовед',
        birthDate: '16.03.1964',
        birthPlace: 'город Минск, БССР',
        deathDate: '24.01.2018',
        deathPlace: 'Минск',
        activity: [
            {
                date: '16.03.1964',
                place: 'Минск',
                description: 'Родился в г.Минске. В детстве Михаил мечтал стать зоологом или биологом, путешественником и искателем сокровищ. Рано начал рисовать — свои первые рисунки Михаил размещал в энциклопедиях о животных, которые делал сам: рисовал моллюсков и других животными и лично подписывал.'
            },
            {
                date: '1975-1985',
                place: 'Минск',
                description: 'Учился в детской народной студии изобразительного искусства при Дворце культуры текстильщиков (1965-1985) в Минске, которой руководил белорусский живописец Василий Сумарев. Тогда же увлекся белорусским языком и белорусской культурой, которым начал уделять большое внимание.'
            },
            {
                date: '1979-1983',
                place: 'Минск',
                description: 'Учился и окончил Минское художественное училище (ныне - Минский государственный художественный колледж им. А.К. Глебова). На первом курсе Михаил Анемподистов еще не очень хорошо знал белорусский язык и сдал экзамен по нему на 3 балла из 5 возможных, но на третьем курсе уже с увлечением читал В. Короткевича, а на четвертом курсе специально попросил учительницу пересдать экзамен по белорусскому языку и пересдал его на «пятерку». Дипломная работа в училище была по плакату.'
            },
            {
                date: '1987',
                place: 'Минск',
                description: 'С марта 1987 года был членом арт-лаборатории «Галина» (неформальной художественной группы) в Минске,, которая своей платформой объявила «неокритический реализм как метод, направленный на бичевание застойных явлений в нашей общественной жизни»'
            },
            {
                date: '1997',
                place: 'Минск',
                description: 'Стал членом Белорусского союза дизайнеров. Был дизайнером известных логотипов — в том числе, логотипа белорусской общественно-культурной кампании «Будем белорусами!», белорусского рок-фестиваля «Басовище-2007» и «Басовище-2008» и др.'
            },
            {
                date: '2011',
                place: 'Минск',
                description: 'Стал членом правления Белорусского союза дизайнеров.'
            },
            {
                date: '2011',
                place: 'Минск',
                description: 'Дебютировал как фотограф, презентовав фотавыставку «Under Ground»: в фотографиях сосредоточился на белорусских овощах, чтобы таким способом открыть более глубокое измерение белорусской культуры. Выбор своей тематики объяснил тем, что белорусы, как овощи, скрывают интересные вещи в себе, не показывают их вовне — нация заглубленных в себя людей: выглядят обычно, а внутри фантастические — под испачканной (от почвы) кожурой картофеля спрятано «золотое солнце».'
            },
            {
                date: '24.01.2018',
                place: 'Минск',
                description: 'Умер от инсульта в г.Минске.'
            }
        ]
    },

    {
        id: 2,
        name: 'Владимир Сергеевич Базан',
        occupation: 'Белорусский фотограф, фотожурналист',
        birthDate: '21.10.1953',
        birthPlace: 'г.Унеча, Брянская область, РСФСР',
        deathDate: null,
        deathPlace: null,
        activity: [
            {
                date: '21.10.1953',
                place: 'Унеча',
                description: 'Родился в г.Унеча, Брянская область, РСФСР'
            },
            {
                date: '1978',
                place: 'Витебск',
                description: 'Окончил художественно-графический факультет Витебского педагогического института.'
            },
            {
                date: '1980-1990',
                place: 'Витебск',
                description: 'Работал фотографом, корреспондентом, ответственным секретарем в витебской многотиражной газете «Строитель».'
            },
            {
                date: '1990-2007',
                place: 'Витебск',
                description: 'Главный редактор, дизайнер и фотокорреспондент газеты «Витебский курьер». Главный редактор специального номера газеты, посвященного Первым Шагаловского дням в Витебске (1991). В середине 80-х возглавлял витебский фотоклуб «Витьба». Центральное место в творчестве занимает репортажная, публицистическая, жанровая фотография. Среди основных работ: серии «Думай, парень!» (1982-2005), «Праздник в православной церкви» (1988), «Армения. Декабрь. 1988 »,«Пионерский лагерь» (1989),«Приметы»(1989),«Чернобыльский натюрморт»(1996),«Париж! Париж! Я не хочу домой!»(2001-2007). На сегодняшний день проживает во Франции.'
            }
        ]
    },

    {
        id: 3,
        name: 'Михаил Григорьевич Борозна',
        occupation: '',
        birthDate: '',
        birthPlace: '',
        deathDate: '',
        deathPlace: '',
        activity: [
            {
                date: '',
                place: '',
                description: ''
            },
        ]
    },

    {
        id: 4,
        name: '',
        occupation: '',
        birthDate: '',
        birthPlace: '',
        deathDate: '',
        deathPlace: '',
        activity: [
            {
                date: '',
                place: '',
                description: ''
            },
        ]
    },

    {
        id: 5,
        name: '',
        occupation: '',
        birthDate: '',
        birthPlace: '',
        deathDate: '',
        deathPlace: '',
        activity: [
            {
                date: '',
                place: '',
                description: ''
            },
        ]
    },
];