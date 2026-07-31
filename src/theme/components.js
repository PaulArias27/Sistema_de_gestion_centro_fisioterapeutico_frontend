const components = {

    MuiButton: {

        styleOverrides: {

            root: {

                borderRadius: 12,
                height: 46,
                fontWeight: 600

            }

        }

    },

    MuiCard: {

        styleOverrides: {

            root: {

                borderRadius: 16

            }

        }

    },

    MuiPaper: {

        styleOverrides: {

            root: {

                borderRadius: 16

            }

        }

    },

    MuiTextField: {

        defaultProps: {

            variant: "outlined",
            fullWidth: true

        }

    }

};

export default components;