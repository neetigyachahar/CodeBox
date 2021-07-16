const compileFiles = (html: string, css: string, js: string) => {
    return (`
    <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            </script>
        </body>
    </html>

`)
}

export default compileFiles