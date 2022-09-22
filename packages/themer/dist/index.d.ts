import * as _mui_material_styles from '@mui/material/styles';

declare const theme: (subDomain: string) => _mui_material_styles.Theme;
declare module "@mui/material/styles" {
    interface Theme {
        brand: {
            logo: string;
        };
    }
    interface ThemeOptions {
        brand?: {
            logo?: string;
        };
    }
}

export { theme };
