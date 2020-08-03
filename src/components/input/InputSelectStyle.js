const customStyles = {
    control: (base, state) => ({
        ...base,
        borderRadius: 'none',
        minHeight: '40px',
        height: '40px',
        color: '#999',


    }),

    valueContainer: (base, state) => ({
        ...base,
        height: '40px',
    }),

    input: (base, state) => ({
        ...base,
        position: 'absolute',
        marginTop: '0',
        paddingBottom: '0',
        paddingTop: '0',
    }),

    placeholder: (base, state) => ({
        ...base,
        position: 'absolute'
    }),

    indicatorSeparator: (base, state) => ({
        ...base,
        display: 'none'
    }),

    menu: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        border: '1px solid #aaa',
        borderRadius: 'none',
        boxSizing: 'border-box',
        display: 'block',
        position: 'absolute',
        width: '100%',
        zIndex: '1051',
        borderTop: '0',
        top: '32px'
    }),
    clearIndicator: (base, state) => ({
        ...base,
        display : 'none'
    }),
    multiValue: (base,state) =>({
        ...base,
        backgroundColor: "rgba(109, 48, 170, 0.2)"
    })

};

export default customStyles;
