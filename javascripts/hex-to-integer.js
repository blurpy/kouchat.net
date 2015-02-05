var HexToInteger = HexToInteger || {};

HexToInteger.hexToRgb = function(hex) {
    var bigint = parseInt(hex.replace("#", ""), 16);

    return {
        r : (bigint >> 16) & 255,
        g : (bigint >> 8) & 255,
        b : bigint & 255
    };
};

HexToInteger.rgbToInt = function(r, g, b, a) {
    return ((a & 0xFF) << 24) |
           ((r & 0xFF) << 16) |
           ((g & 0xFF) << 8)  |
           ((b & 0xFF) << 0);
};

HexToInteger.convertHexToInteger = function(inputId, outputId) {
    var hex = document.getElementById(inputId).value;
    var rgb = HexToInteger.hexToRgb(hex);
    var integer = HexToInteger.rgbToInt(rgb.r, rgb.g, rgb.b, 255);

    document.getElementById(outputId).innerHTML = integer;
};
