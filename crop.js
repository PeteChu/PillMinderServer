var cv = require('./utils').cv

module.exports = function cropImage(image) {
    let mat = image.bgrToGray()
    let threshold = 100;
    let blur = mat.gaussianBlur(new cv.Size(5, 5), 0)
    let gaussThreshold = blur.threshold(127, 255, cv.THRESH_BINARY + cv.THRESH_OTSU)

    var width = null
    var height = null
    var x, y = 0
    var boundingRect = null

    thresh = gaussThreshold.canny(threshold, threshold, 3, true)

    let contours = thresh.findContours(0, 1)
    contours.forEach(element => {
        let rect = element.boundingRect()
        if (rect.height > height && rect.width > width) {
            height = rect.height
            width = rect.width
            x = rect.x
            y = rect.y
            boundingRect = rect
        }
    });
    thresh.drawRectangle(boundingRect, new cv.Vec(255, 0, 0), 2)
    cv.imwrite('./images/canny/canny.jpg', thresh)
    return {
        x,
        y,
        width,
        height
    }
}

// cv.imwrite('./images/canny/canny.jpg', thresh)