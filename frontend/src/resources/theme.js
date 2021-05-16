/**
 * The theme provides cross component UI like Colors and Fonts.
 * @author Irem Toroslu
 * @author Martin Wagner 
 */

const color = {
    brightBlue: '#3498db',
    white:'white',
    darkGrayishBlue: '#8b8d94',
    whitish: '#b5b4b9',
    white:'#000000',
    darkGray: '#262625',
    darkRed: '#a90000',
    grayishBlue: '#A4A6B3',
    grayishBlue2: '#9fa2b4',
    grayishBlue3: '#bdc3c7',
    limeGreen: '#00b300',
    blueGray:'#33b3a6',//687f8c016064018788019799
    lightBlue: '#3751FF',
    lightGrayishBlue: '#F7F8FC', // background color
    lightGrayishBlue2: '#DFE0EB',
    paleBlue: '#DDE2FF',
    paleBlueTransparent: 'rgba(221, 226, 255, 0.08)',
    veryDarkGrayishBlue: '#373a47',
    lightgreen: '#66a103',
    lightblueGray:'#5ba688',//009092, 80a7af
    darkskyblue:'#01a1c1',//1a1c1
    Copper:'#BF6016',//B87333
    Alminium:'#6093AC',//'#A9ACB6',
    SiliconSteel:'#0c6c84',//'#8FB1CC',016064,8EA0B3, 016A86,006994,04657e,0c6c84
    TransformerOil: '#FACA0F',//'#D4AF37 cca42b',
    StainlessSteel:'#caccce', //
    Pressboard:'#C38888',//BC8379,
    Steel:'#8C9BA1'


};

const typography = {
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: '24px',
        letterSpacing: '0.4px'
    },
    icontitle: {
        fontSize: 16,
        lineHeight: '16px',
        letterSpacing: '0.1px'
    },
    smallSubtitle: {
        fontSize: 18,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        fontWeight:'inherit'
    },
    secondSmallSubtitle:{
        fontSize: 16,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        fontWeight:'inherit'
    },
    link: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: color.lightBlue,
        textAlign: 'right',
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': {
            color: color.grayishBlue
        }
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: 15,
        lineHeight: '20px',
        letterSpacing: 0.2
    },
    title: {
        fontWeight: 'inherit',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    subtitle: {
        fontWeight: 'inherit',
        fontSize: 20,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    textcontent: {
        fontWeight: 'inherit',
        fontSize: 18,
        lineHeight: '16px',
        letterSpacing: 0.3
    },
    chartItemstitle: {
        fontWeight: 'inherit',
        fontSize: 12,
        lineHeight: '30px',
        letterSpacing: 0.3
    },
    buttontitle: {
        fontWeight: 'inherit',
        fontSize: 12,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
};

/**
 * Defining uniform Colors.
 */
const uniformStyle = {
    color: { 
        primaryFontColor:  color.darkGrayishBlue,
        primaryIconColor: 'white',
        secondaryFontColor: color.whitish,
        highlightingColor: color.limeGreen,
        primaryBackgroundColor: color.white,
        secondaryBackgroundColor: color.darkGray,
        barChartColor: color.darkskyblue ,
        tableHeaderColor: color.lightblueGray,
    }
}

export default {
    // https://www.colorhexa.com/A4A6B3
    color,
    typography,
    uniformStyle
};
