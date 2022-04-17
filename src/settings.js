export default {
    tests: [
        {
            name: '01_var_const',
            import: import('./tests/01_var_const'),
            menuName: "*Temporary*"
        },

        {
            name: '02_tables',
            import: import('./tests/02_tables'),
            menuName: "Tables"
        },
        {
            name: '03_alerts',
            import: import('./tests/03_alerts'),
            menuName: "Alerts"
        }
    ]
};



