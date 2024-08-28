import {nextui} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)'],
                mono: ['var(--font-dm-mono)'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        nextui(
            {
                "themes": {
                    "light": {
                        "colors": {
                            "default": {
                                "50": "#fafafa",
                                "100": "#f2f2f3",
                                "200": "#ebebec",
                                "300": "#e3e3e6",
                                "400": "#dcdcdf",
                                "500": "#d4d4d8",
                                "600": "#afafb2",
                                "700": "#8a8a8c",
                                "800": "#656567",
                                "900": "#404041",
                                "foreground": "#000",
                                "DEFAULT": "#d4d4d8"
                            },
                            "primary": {
                                "50": "#fef3e0",
                                "100": "#fce3b4",
                                "200": "#fbd388",
                                "300": "#f9c35c",
                                "400": "#f8b230",
                                "500": "#f6a204",
                                "600": "#cb8603",
                                "700": "#a06903",
                                "800": "#754d02",
                                "900": "#4a3101",
                                "foreground": "#000",
                                "DEFAULT": "#f6a204"
                            },
                            "secondary": {
                                "50": "#e6e0e2",
                                "100": "#c4b4b9",
                                "200": "#a18890",
                                "300": "#7e5d68",
                                "400": "#5c313f",
                                "500": "#390516",
                                "600": "#2f0412",
                                "700": "#25030e",
                                "800": "#1b020a",
                                "900": "#110207",
                                "foreground": "#fff",
                                "DEFAULT": "#390516"
                            },
                            "success": {
                                "50": "#e4fdf8",
                                "100": "#bdfbee",
                                "200": "#97f8e4",
                                "300": "#70f5db",
                                "400": "#4af3d1",
                                "500": "#23f0c7",
                                "600": "#1dc6a4",
                                "700": "#179c81",
                                "800": "#11725f",
                                "900": "#0b483c",
                                "foreground": "#000",
                                "DEFAULT": "#23f0c7"
                            },
                            "warning": {
                                "50": "#fef4e4",
                                "100": "#fce4bd",
                                "200": "#fad497",
                                "300": "#f9c571",
                                "400": "#f7b54a",
                                "500": "#f5a524",
                                "600": "#ca881e",
                                "700": "#9f6b17",
                                "800": "#744e11",
                                "900": "#4a320b",
                                "foreground": "#000",
                                "DEFAULT": "#f5a524"
                            },
                            "danger": {
                                "50": "#fee1eb",
                                "100": "#fbb8cf",
                                "200": "#f98eb3",
                                "300": "#f76598",
                                "400": "#f53b7c",
                                "500": "#f31260",
                                "600": "#c80f4f",
                                "700": "#9e0c3e",
                                "800": "#73092e",
                                "900": "#49051d",
                                "foreground": "#000",
                                "DEFAULT": "#f31260"
                            },
                            "background": "#ffffff",
                            "foreground": {
                                "50": "#dfdfdf",
                                "100": "#b3b3b3",
                                "200": "#868686",
                                "300": "#595959",
                                "400": "#2d2d2d",
                                "500": "#000000",
                                "600": "#000000",
                                "700": "#000000",
                                "800": "#000000",
                                "900": "#000000",
                                "foreground": "#fff",
                                "DEFAULT": "#000000"
                            },
                            "content1": {
                                "DEFAULT": "#ffffff",
                                "foreground": "#000"
                            },
                            "content2": {
                                "DEFAULT": "#f4f4f5",
                                "foreground": "#000"
                            },
                            "content3": {
                                "DEFAULT": "#e4e4e7",
                                "foreground": "#000"
                            },
                            "content4": {
                                "DEFAULT": "#d4d4d8",
                                "foreground": "#000"
                            },
                            "focus": "#F6A204",
                            "overlay": "#000000",
                            "divider": "#111111"
                        }
                    },
                    "dark": {
                        "colors": {
                            "default": {
                                "50": "#141417",
                                "100": "#232327",
                                "200": "#313136",
                                "300": "#3f3f46",
                                "400": "#6a6a70",
                                "500": "#959599",
                                "600": "#c1c1c3",
                                "700": "#ececed",
                                "foreground": "#fff",
                                "DEFAULT": "#313136"
                            },
                            "primary": {
                                "50": "#503501",
                                "100": "#875902",
                                "200": "#bf7e03",
                                "300": "#f6a204",
                                "400": "#f8b73c",
                                "500": "#facc75",
                                "600": "#fce1ad",
                                "700": "#fef6e6",
                                "foreground": "#000",
                                "DEFAULT": "#bf7e03"
                            },
                            "secondary": {
                                "50": "#130207",
                                "100": "#1f030c",
                                "200": "#2c0411",
                                "300": "#390516",
                                "400": "#663d4a",
                                "500": "#92767f",
                                "600": "#bfaeb3",
                                "700": "#ebe6e8",
                                "foreground": "#fff",
                                "DEFAULT": "#2c0411"
                            },
                            "success": {
                                "50": "#0b4e41",
                                "100": "#13846d",
                                "200": "#1bba9a",
                                "300": "#23f0c7",
                                "400": "#55f3d4",
                                "500": "#86f7e0",
                                "600": "#b8faed",
                                "700": "#e9fef9",
                                "foreground": "#000",
                                "DEFAULT": "#1bba9a"
                            },
                            "warning": {
                                "50": "#50360c",
                                "100": "#875b14",
                                "200": "#be801c",
                                "300": "#f5a524",
                                "400": "#f7b955",
                                "500": "#face87",
                                "600": "#fce2b8",
                                "700": "#fef6e9",
                                "foreground": "#000",
                                "DEFAULT": "#be801c"
                            },
                            "danger": {
                                "50": "#4f061f",
                                "100": "#860a35",
                                "200": "#bc0e4a",
                                "300": "#f31260",
                                "400": "#f64784",
                                "500": "#f87da8",
                                "600": "#fbb2cb",
                                "700": "#fee7ef",
                                "foreground": "#fff",
                                "DEFAULT": "#bc0e4a"
                            },
                            "background": "#13100f",
                            "foreground": {
                                "50": "#515151",
                                "100": "#8a8a89",
                                "200": "#c2c2c1",
                                "300": "#fafaf9",
                                "400": "#fbfbfa",
                                "500": "#fcfcfc",
                                "600": "#fdfdfd",
                                "700": "#fffffe",
                                "foreground": "#000",
                                "DEFAULT": "#c2c2c1"
                            },
                            "content1": {
                                "DEFAULT": "#18181b",
                                "foreground": "#fff"
                            },
                            "content2": {
                                "DEFAULT": "#27272a",
                                "foreground": "#fff"
                            },
                            "content3": {
                                "DEFAULT": "#3f3f46",
                                "foreground": "#fff"
                            },
                            "content4": {
                                "DEFAULT": "#52525b",
                                "foreground": "#fff"
                            },
                            "focus": "#F6A204",
                            "overlay": "#fafaf9",
                            "divider": "#ffffff"
                        }
                    }
                },
                "layout": {
                    "fontSize": {
                        "tiny": "0.75rem",
                        "small": "0.875rem",
                        "medium": "1rem",
                        "large": "1.125rem"
                    },
                    "lineHeight": {
                        "tiny": "1rem",
                        "small": "1.25rem",
                        "medium": "1.5rem",
                        "large": "1.75rem"
                    },
                    "radius": {
                        "small": "0.5rem",
                        "medium": "0.75rem",
                        "large": "0.875rem"
                    },
                    "borderWidth": {
                        "small": "1px",
                        "medium": "2px",
                        "large": "3px"
                    },
                    "disabledOpacity": "0.5",
                    "dividerWeight": "1",
                    "hoverOpacity": "0.9"
                }
            }
        )
    ],
}

