export const jsQuiz = {
    questions: [
        {
            question: 'A div element is used for _________ organization and styling of page elements, a span is used for _________ organization and styling',
            type: 'FIB',
            correctAnswer : 'block-level, inline',
        },
        {
            question: 'Elements comunicate to the browser to _________ are the difference between element and tags in HTML',
            type: 'FIB',
            correctAnswer : 'render text',
        },
        {
            question: "What is some common list that are used when design a page?",
            choices: [
                'Ordered list',
                'Unordered list',
                'Definiiton list',
                'All from above'
            ],
            type: 'MCQs',
            correctAnswer : 'All from above',
        },
        {
            question: 'Select the layout of an HTML in order ?',
            choices: [
                'header, nav, section, article, aside, footer',
                'header, section, aside, article, nav, footer',
                'header, nav, article, section, footer, aside',
                'nav, header, nav, section, article, aside, footer'
            ],
            type: 'MCQs',
            correctAnswer : 'header, nav, section, article, aside, footer',
        },
        {
            question: 'How to make a picture of a backgorund image of a web page?',
            choices: [
                '<body background="img"',
                '<body bg=""img',
                'img=backgorund',
                'img=bg'
            ],
            type: 'MCQs',
            correctAnswer : '<body background="img"',
        },
        {
            question: 'What is the Box Model in CSS and which proprities are part of?',
            choices: [
                'Boxed HTML with div, nav, footer',
                'Determinate the height and width of the rectangular box around every html element with content, padding, border and margin',
                'Is a concept of a box that is actually the page and have a border and a margin',
                'Noone from above'
            ],
            type: 'MCQs',
            correctAnswer : 'Determinate the height and width of the rectangular box around every html element with content, padding, border and margin',
        },
        {
            question: 'What is z-index?',
            choices: [
                'The position in space of an index',
                'Is part of a system type xYz for bordering the html elements',
                'Is a concept of "zero" index which refers to the IDs',
                'Specify the stack order of elements that overlap eachother'
            ],
            type: 'MCQs',
            correctAnswer : 'Specify the stack order of elements that overlap eachother',
        },
        {
            question: 'ID elements are ______, but class elements can have _______',
            type: 'FIB',
            correctAnswer : 'unique, multiple',
        },
        {
            question: 'You need to target h2 and h3 and apply the same style, write the code for it',
            type: 'FIB',
            correctAnswer : 'h2, h3 {color:red;}',
        },
        {
            question: 'What are the contextual selectors',
            choices: [
                'Selectors for a specific context',
                'Not part of CSS',
                'Specific types that allows devs to style diff parts of the document',
                'Specific types that allows devs to style diff parts of the query'
            ],
            type: 'MCQs',
            correctAnswer : 'Specific types that allows devs to style diff parts of the document',
        },
        {
            question: 'CSS Preprocessor and SASS',
            choices: [
                'Let us use complex logical syntax(variables, functions) / used for indendation (Syntactically Awesome Style Sheets)',
                'Let us use simple and logical syntax(variables, functions) / used for indendation (Syntactically Awesome Style Sheets)',
                'Let us use complex abstract syntax(classes and objects) / used for indendation (Syntactically Awesome Style Sheets)',
                'Noone from above'
            ],
            type: 'MCQs',
            correctAnswer : 'Let us use complex logical syntax(variables, functions) / used for indendation (Syntactically Awesome Style Sheets)',
        },
        {
            question: 'Pseudo classes are the type of elements that dont exist in a normal _________',
            type: 'FIB',
            correctAnswer : 'document tree',
        },
        {
            question: 'Does margin-top and margin-bottom have an effect on inline elements?',
            choices: [
                'Yes',
                'No',
                'Only outline elements',
                'Only followed by an ID'
            ],
            type: 'MCQs',
            correctAnswer : 'Yes',
        },
        {
            question: 'The cascaded property will be overriden with the style !_________',
            type: 'FIB',
            correctAnswer : 'important',
        },
        {
            question: 'What are gradients in CSS?',
            choices: [
                'A property of CSS that allows displaying smooth transformation between two or more specified colors. The types of gradients are linear and radial. ',
                'The float property of CSS positions an image to the right or left as needed, including text wrapping around it. All properties of elements used before it remain unchanged.',
            ],
            type: 'MCQs',
            correctAnswer : 'A property of CSS that allows displaying smooth transformation between two or more specified colors. The types of gradients are linear and radial. ',
        },
        {
            question: 'What are the position states in CSS?',
            choices: [
                'The properties are flex-direction, wrap, flow, content, and align-items, and content.',
                'The position are relative, static, absolute, and fixed. The default position state is static.',
            ],
            type: 'MCQs',
            correctAnswer : 'The four-position states in CSS are relative, static, absolute, and fixed. The default position state is static.',
        },


        

        
    ]
};

export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
};