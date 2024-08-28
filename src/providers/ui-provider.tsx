import {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/system";

const UiProvider = ({children}: {children: ReactNode}) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

export default UiProvider;