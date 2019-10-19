$('[data-fancybox="images"]').fancybox({
    buttons : [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close',
        'download',
        'thumbs',
    ],
    thumbs : {
        autoStart : true
    }
});






var LOGO = 'data:image/png;base64,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';

var data = [
    {id:'acmeinc', name:'Acme Inc.', dataTitle:'', parent:'', style:{topState:{backgroundImage:LOGO, backgroundPosition:'2 2'}}},
    {id:'alicec', name:'Alice Cooper', dataTitle:'CEO', parent:'acmeinc', cls:'blue', style:{topState:{backgroundImage:PEOPLE.rf}}},

    {id:'brettm', name:'Brett Michaels', dataTitle:'VP of Marketing', parent:'alicec', cls:'lgrey', style:{topState:{backgroundImage:PEOPLE.dj}}},
    {id:'stevien', name:'Stevie Nicks', dataTitle:'VP of Operations', parent:'alicec', cls:'orange', style:{topState:{backgroundImage:PEOPLE.kj}}},
    {id:'stevent', name:'Steven Tyler', dataTitle:'VP of Sales', parent:'alicec', cls:'orange', style:{topState:{backgroundImage:PEOPLE.tw}}},

    {id:'kurtc', name:'Kurt Cobain', dataTitle:'Marketing Manager', parent:'brettm', cls:'pink', style:{topState:{backgroundImage:PEOPLE.dm}}},

    {id:'jimih', name:'Jimi Hendrix', dataTitle:'Sales Manager', parent:'stevent', cls:'dgrey', style:{topState:{backgroundImage:PEOPLE.mb}}},
    {id:'cindyl', name:'Cindy Lauper', dataTitle:'Sales Manager', parent:'stevent', cls:'dgrey', style:{topState:{backgroundImage:PEOPLE.tm}}},

    {id:'davidg', name:'David Gilmour', dataTitle:'Assistant', parent:'jimih', cls:'cyan', style:{topState:{backgroundImage:PEOPLE.jk}}},
    {id:'steveh', name:'Steve Hogarth', dataTitle:'Assistant', parent:'jimih', cls:'cyan', style:{topState:{backgroundImage:PEOPLE.bd}}}
];

var cdata = {
    type : 'tree',
    backgroundColor : '#f9f9f9',
    plotarea : {
        margin : '60 30 30 30'
    },
    options : {
        aspect : 'tree-down',
        orgChart : true,
        depthRatio : 2.5,
        link : {
            lineColor : '#bbb',
            lineWidth : 4
        },
        node : {
            type : 'box',
            width : 150,
            height : 60,
            borderWidth : 0,
            borderRadius : 5,
            gradientColors : '#f0f0f0 #f0f0f0 #f0f0f0 #f0f0f0',
            gradientStops : '0.001 0.039 0.040 0.999',
            fillAngle : 0,
            hoverState : {
                visible : false
            },
            topState : {
                anchor : 'c',
                width : 48,
                height : 48,
                offsetY : -40,
                borderWidth : 6,
                borderColor : '#fff',
                borderRadius : 5,
                backgroundRepeat : 'no-repeat',
                backgroundPosition : '0 0',
                backgroundScale : '0.8'
            },
            label : {
                paddingTop : 10,
                fontSize : 13,
                text : '<b>%text</b><br>%data-title',
                width : 150
            },
            tooltip : {
                text : '<b>%text</b><br>%data-title'
            }
        },
        'node[cls-blue]' : {
            gradientColors : '#091F76 #091F76 #f0f0f0 #f0f0f0'
        },
        'node[cls-orange]' : {
            gradientColors : '#F8B033 #F8B033 #f0f0f0 #f0f0f0'
        },
        'node[cls-pink]' : {
            gradientColors : '#FF6F98 #FF6F98 #f0f0f0 #f0f0f0'
        },
        'node[cls-cyan]' : {
            gradientColors : '#02C7A9 #02C7A9 #f0f0f0 #f0f0f0'
        },
        'node[cls-lgrey]' : {
            gradientColors : '#aaa #aaa #f0f0f0 #f0f0f0'
        },
        'node[cls-dgrey]' : {
            gradientColors : '#777 #777 #f0f0f0 #f0f0f0'
        }
    },
    series : data
};
zingchart.render({
    id : 'zc',
    width : 800,
    height : 620,
    output : 'svg',
    data : cdata
});