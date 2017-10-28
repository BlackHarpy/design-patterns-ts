import JSONFormatter from 'json-formatter-js'

export class DOMPrinter {

    private static createJsonFormatter (json: any) {
        const options = {
            hoverPreviewEnabled: true,
            hoverPreviewArrayCount: 100,
            hoverPreviewFieldCount: 5,
            theme: '',
            animateOpen: true,
            animateClose: true
        };
        return new JSONFormatter(json, 1, options);
    }

    public static resetElement(elementId: string) {
        const jsonContainer = document.getElementById(elementId);
        while (jsonContainer.firstChild) {
            jsonContainer.removeChild(jsonContainer.firstChild);
        }
    }

    public static printLog(elementId: string, text: string) {
        const div = document.getElementById(elementId);
        const divText = div.innerHTML;
        let logText: string;
        logText = divText + text + `<br>`;
        div.innerHTML = logText;
    }

    public static printJson(elementId: string, jsonList: any[]) {
        const jsonContainer = document.getElementById(elementId);
        jsonList.forEach((json) => {
            const formatter = DOMPrinter.createJsonFormatter(json);
            jsonContainer.appendChild(formatter.render());
        });
    }
}