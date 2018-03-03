var cv = require('/usr/lib/node_modules/opencv4nodejs')
var cropImage = require('./crop')
var jimp = require('jimp')

let image = cv.imread('./images/image_2.jpg')
let cropData = cropImage(image)

jimp.read('./images/image_1.jpg', (err, image) => {
    image.crop(cropData.x, cropData.y, cropData.width, cropData.height)
    image.write('./images/cropped_image.jpg')
})