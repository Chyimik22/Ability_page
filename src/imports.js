// dynamic imports with variable name is not working in parcel
const imports = {
    '01_var_const': import('./tests/01_var_const'),
    '02_tables': import('./tests/02_tables'),
    '03_alerts': import('./tests/03_alerts')
};
export default imports;