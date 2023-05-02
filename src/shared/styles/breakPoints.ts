const size = {
    xs: '400px', // pequeno
    sm: '600px', // tela mobile
    md: '900px', // tela tablet
    lg: '1280px', // laptops
    xl: '1440px', // computadores/monitores
    xxl: '1920px', // telas muto grandes
}

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
}