const size = {
    xs: '400px', // pequeno
    sm: '600px', // tela mobile
    md: '900px', // tela tablet
    lg: '1280px', // laptops
    xl: '1440px', // computadores/monitores
    xxl: '1920px', // telas muto grandes
}

export const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
}