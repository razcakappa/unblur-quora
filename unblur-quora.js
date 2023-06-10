var styles = `
    .q-box{
        filter: blur(0)!important;
    }
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
